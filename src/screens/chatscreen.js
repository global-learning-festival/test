// ChatScreen.js
import "../styles/chat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "../components/chat";

const socket = io.connect("http://localhost:3001");

function ChatScreen() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "") {
      socket.emit("join_room", "admin"); // Join the admin room
      setShowChat(true);
    }
  };

  return (
    <div className="Chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>&nbsp;&nbsp;Support</h3>
          <input
            type="text"
            placeholder="                            Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick={joinRoom}>
            Start Chatting&nbsp;<i className="bi bi-chat-text"></i>
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room="admin" />
      )}
    </div>
  );
}

export default ChatScreen;

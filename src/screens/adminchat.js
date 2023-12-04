// AdminScreen.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const adminSocket = io.connect("http://localhost:3001/admin"); // Connecting to the admin namespace

function AdminScreen() {
  const [activeChats, setActiveChats] = useState([]);
  const [userQueue, setUserQueue] = useState([]);

  useEffect(() => {
    adminSocket.emit("join_queue");

    adminSocket.on("receive_message", (data) => {
      setActiveChats((chats) => {
        const updatedChats = chats.map((chat) =>
          chat.username === data.author
            ? { ...chat, messages: [...chat.messages, data] }
            : chat
        );
        return updatedChats;
      });
    });

    adminSocket.on("admin_available", () => {
      const userSocket = userQueue.shift();
      if (userSocket) {
        userSocket.emit("admin_assigned");
      }
    });

    adminSocket.on("update_admin_view", (data) => {
      setActiveChats(data.activeChats);
      setUserQueue(data.userQueue);
    });

    return () => {
      adminSocket.disconnect();
    };
  }, []);

  const sendMessageToUser = (user, message) => {
    const data = {
      room: user,
      author: "admin",
      message: message,
      time: new Date().toLocaleTimeString(),
    };

    adminSocket.emit("send_message", data);
  };

  const startChatWithUser = (user) => {
    adminSocket.emit("join_room", user);
  };

  return (
    <div className="admin-screen">
      <h2>Admin View</h2>
      <div className="active-chats">
        <h3>Active Chats</h3>
        {activeChats.map((chat) => (
          <div key={chat.username} className="chat-item">
            <p>User: {chat.username}</p>
            <div>
              {chat.messages.map((message, index) => (
                <p key={index}>
                  {message.author}: {message.message}
                </p>
              ))}
            </div>
            <input
              type="text"
              placeholder="Type your message here"
              onChange={(event) => {
                const newMessage = event.target.value;
                const sendButton = document.getElementById(`sendButton-${chat.username}`);
                sendButton.onclick = () => sendMessageToUser(chat.username, newMessage);
              }}
            />
            <button id={`sendButton-${chat.username}`}>Send</button>
          </div>
        ))}
      </div>
      <div className="user-queue">
        <h3>User Queue</h3>
        {userQueue.map((user, index) => (
          <div key={index}>
            <p>User: {user}</p>
            <button onClick={() => startChatWithUser(user)}>Start Chat</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminScreen;

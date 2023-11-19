import React, { useState, useEffect } from 'react';
import '../styles/alternate.css'
const Help = () => {



  const [items, setItems] = useState([
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
    { text: 'Item 3' },
    { text: 'Item 3' }, { text: 'Item 3' }, { text: 'Item 3' }, { text: 'Item 3' }, { text: 'Item 3' }, { text: 'Item 3' }, { text: 'Item 3' },
    // ... more items
  ]);

  useEffect(() => {
    // Simulating data fetching from the backend
    // Replace this with your actual backend API call
    const fetchData = async () => {
      try {
        // Assuming your backend endpoint is '/api/items'
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs only once on component mount

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`container ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default Help
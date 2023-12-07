// defining schema and creating a model using mongoose

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get('/api/chats');
      setChats(data);
      // No need to log chats here
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    console.log('Chats after state update:', chats); // Log the updated state
  }, [chats]);

  return (
    <div>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>{chat.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;

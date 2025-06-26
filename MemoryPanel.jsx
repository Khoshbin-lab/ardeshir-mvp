import React, { useState, useEffect } from 'react';

function MemoryPanel() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('ardeshir_memory');
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
    localStorage.setItem('ardeshir_memory', JSON.stringify(newMessages));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧠 حافظه اردشیر</h2>
      {messages.length === 0 ? (
        <p>هیچ پیامی ذخیره نشده است.</p>
      ) : (
        <ul style={styles.list}>
          {messages.map((msg, index) => (
            <li key={index} style={styles.item}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
    fontFamily: 'Tahoma, sans-serif',
  },
  title: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  list: {
    paddingLeft: '20px',
  },
  item: {
    marginBottom: '6px',
  },
};

export default MemoryPanel;
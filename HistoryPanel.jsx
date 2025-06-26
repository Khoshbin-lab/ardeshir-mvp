import React from 'react';

function HistoryPanel() {
  const messages = [
    '👤 کاربر: سلام اردشیر!',
    '🤖 اردشیر: سلام! در خدمتم 😊',
    '👤 کاربر: فایل اکسل رو باز کن',
    '🤖 اردشیر: حتماً، فایل رو بارگذاری کن لطفاً.',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📜 تاریخچه گفتگو</h2>
      <ul style={styles.list}>
        {messages.map((msg, index) => (
          <li key={index} style={styles.item}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
    backgroundColor: '#f4f4f4',
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
    marginBottom: '5px',
  }
};

export default HistoryPanel;

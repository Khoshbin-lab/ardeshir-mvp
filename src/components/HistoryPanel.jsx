import React from 'react';

function HistoryPanel() {
  const history = [
    { type: 'file', content: 'تحلیل فایل report.xlsx' },
    { type: 'voice', content: 'امروز چقدر باید کار کنم؟' },
  ];

  return (
    <div style={styles.container}>
      <h3>🗂️ تاریخچه مکالمات:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.type === 'file' ? '📄' : '🗣️'} {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'left',
    margin: '20px auto',
    width: '60%',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
  },
};

export default HistoryPanel;

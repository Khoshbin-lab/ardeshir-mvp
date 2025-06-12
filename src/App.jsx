import React from 'react';
import VoiceButton from './components/VoiceButton';
import FileUploader from './components/FileUploader';
import HistoryPanel from './components/HistoryPanel';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🤖 اردشیر</h1>
      <VoiceButton />
      <FileUploader />
      <HistoryPanel />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Tahoma, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
};

export default App;

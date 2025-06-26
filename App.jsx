import React from 'react';
import VoiceButton from './components/VoiceButton';
import ExcelReader from './components/ExcelReader';
import ChatGPTPanel from './components/ChatGPTPanel';
import WebReader from './components/WebReader';
import MemoryPanel from './components/MemoryPanel';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🤖 اردشیر</h1>
      <VoiceButton />
      <ExcelReader />
      <ChatGPTPanel />
      <MemoryPanel />
      <WebReader />
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

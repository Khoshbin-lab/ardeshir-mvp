import React, { useState } from 'react';

function VoiceButton() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    console.log(isRecording ? '⏹️ ضبط متوقف شد.' : '🎙️ ضبط شروع شد...');
  };

  return (
    <button onClick={toggleRecording} style={styles.button}>
      {isRecording ? '⏹️ توقف مکالمه' : '🎙️ شروع مکالمه'}
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px 25px',
    fontSize: '16px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default VoiceButton;
import React, { useState } from 'react';

function VoiceButton() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('مرورگر شما از تبدیل گفتار به متن پشتیبانی نمی‌کند.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'fa-IR';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };
    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    recognition.start();
  };

  return (
    <div style={styles.wrapper}>
      <button onClick={startListening} style={styles.button}>
        {isListening ? '🎤 در حال گوش دادن...' : '🎙️ شروع مکالمه صوتی'}
      </button>
      {transcript && <p style={styles.output}>📝 {transcript}</p>}
    </div>
  );
}

const styles = {
  wrapper: { marginBottom: '20px' },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
  output: {
    marginTop: '10px',
    fontFamily: 'Tahoma, sans-serif',
    fontSize: '16px',
    color: '#333',
  },
};

export default VoiceButton;

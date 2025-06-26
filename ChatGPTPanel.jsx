import React, { useState } from 'react';

function ChatGPTPanel() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendToGPT = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_OPENAI_API_KEY',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        }),
      });

      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || '❌ خطا در دریافت پاسخ');
    } catch (err) {
      setResponse('❌ خطا در اتصال به API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3>💬 ارتباط با ChatGPT</h3>
      <textarea
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="سؤال یا متن خود را وارد کنید..."
      />
      <button onClick={sendToGPT} style={styles.button} disabled={loading}>
        {loading ? '⏳ در حال پردازش...' : '📤 ارسال'}
      </button>
      {response && <div style={styles.response}><strong>🤖 پاسخ:</strong><p>{response}</p></div>}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '30px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    fontFamily: 'Tahoma, sans-serif',
  },
  input: {
    width: '100%',
    height: '80px',
    marginBottom: '10px',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '6px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  response: {
    marginTop: '20px',
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '6px',
  },
};

export default ChatGPTPanel;

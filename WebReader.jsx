import React, { useState } from 'react';

function WebReader() {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWebsiteText = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setContent('');

    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
      const res = await fetch(proxyUrl);
      const data = await res.json();

      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/html');
      const bodyText = doc.body.innerText;
      setContent(bodyText.slice(0, 3000)); // limit to 3000 chars
    } catch (error) {
      setContent('❌ خطا در خواندن سایت یا محدودیت دسترسی (CORS).');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3>🌐 تحلیل سایت</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="آدرس سایت را وارد کنید..."
        style={styles.input}
      />
      <button onClick={fetchWebsiteText} style={styles.button} disabled={loading}>
        {loading ? '⏳ در حال خواندن...' : '📥 خواندن محتوا'}
      </button>
      {content && <pre style={styles.result}>{content}</pre>}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    fontFamily: 'Tahoma, sans-serif',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    whiteSpace: 'pre-wrap',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ddd',
  },
};

export default WebReader;
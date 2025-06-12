import React from 'react';

function FileUploader() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('📎 فایل انتخاب شد:', file.name);
    }
  };

  return (
    <div style={styles.container}>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '20px',
  },
};

export default FileUploader;

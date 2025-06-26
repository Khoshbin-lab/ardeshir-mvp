import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelReader() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(sheetData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input type="file" onChange={handleFileUpload} />
      {data.length > 0 && (
        <table style={{ marginTop: '10px', width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ border: '1px solid #ccc', padding: '8px' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelReader;

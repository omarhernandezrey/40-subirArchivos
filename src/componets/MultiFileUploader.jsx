import React, { useState } from 'react';

const MultiFileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} multiple />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - Extensión: {file.name.split('.').pop()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiFileUploader;

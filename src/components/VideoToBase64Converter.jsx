import React, { useState } from "react";

const VideoToBase64Converter = () => {
  const [base64String, setBase64String] = useState("");
  const [fileExtension, setFileExtension] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        setBase64String(base64);
        const extensionMatch = file.name.match(/\.([^.]+)$/);
        if (extensionMatch) {
          const extension = extensionMatch[1].toLowerCase();
          setFileExtension(extension);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="video/*" />
      {base64String && (
        <div>
          <p>Base64 String:</p>
          <code>{base64String}</code>
        </div>
      )}
      {fileExtension && (
        <div>
          <p>File Extension:</p>
          <code>{fileExtension}</code>
        </div>
      )}
    </div>
  );
};

export default VideoToBase64Converter;

import React, { useState } from "react";

const ImageToBase64Converter = () => {
  const [base64String, setBase64String] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setBase64String(reader.result.split(",")[1]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {base64String && (
        <div>
          <img src={`data:image/png;base64,${base64String}`} alt="Converted" />
          <p>Base64 String:</p>
          <code>{base64String}</code>
        </div>
      )}
    </div>
  );
};

export default ImageToBase64Converter;

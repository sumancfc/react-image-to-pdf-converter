import React, { useState } from "react";
import GlobalStyle from "./globalStyle";
import Title from "./components/Title";
import Image from "./components/UploadImage";
import Button from "./components/Button";

const App = () => {
  const clickHandler = () => {
    alert("Clicked");
  };

  const [uploadImage, setUploadImage] = useState([]);

  return (
    <>
      {/* Global Styled */}
      <GlobalStyle />

      {/* Title */}
      <Title title='Convert Images to PDFs' />

      {/* Image Upload Section */}
      <Image image={uploadImage} />

      {/* Button */}
      <Button clickHandler={clickHandler} uploadImage={uploadImage} />
    </>
  );
};

export default App;

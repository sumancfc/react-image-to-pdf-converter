import React, { useState, useCallback } from "react";
import GlobalStyle from "./globalStyle";
import Title from "./components/Title";
import Image from "./components/UploadImage";
import Button from "./components/Button";
import * as Helpers from "./helpers";

const App = () => {
  const [uploadImage, setUploadImage] = useState([]);

  const handleImageUpload = useCallback(
    (event) => {
      const fileList = event.target.files;
      const fileArray = fileList ? Array.from(fileList) : [];
      const fileToImagePromises = fileArray.map(Helpers.fileToImageURL);

      Promise.all(fileToImagePromises).then(setUploadImage);
    },
    [setUploadImage]
  );

  const cleanUpUploadedImages = useCallback(() => {
    setUploadImage([]);
    uploadImage.forEach((image) => {
      URL.revokeObjectURL(image.src);
    });
  }, [setUploadImage, uploadImage]);

  const generatePdfFromImages = useCallback(() => {
    Helpers.generatePdfFromImages(uploadImage);
    cleanUpUploadedImages();
  }, [uploadImage, cleanUpUploadedImages]);

  return (
    <>
      {/* Global Styled */}
      <GlobalStyle />

      {/* Title */}
      <Title title='Convert Images to PDFs' />

      {/* Image Upload Section */}
      <Image uploadImage={uploadImage} />

      {/* Button */}
      <Button
        handleImageUpload={handleImageUpload}
        uploadImage={uploadImage}
        generatePdfFromImages={generatePdfFromImages}
      />
    </>
  );
};

export default App;

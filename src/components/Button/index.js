import React from "react";
import styled from "styled-components";

const Button = ({ generatePdfFromImages, uploadImage, handleImageUpload }) => {
  return (
    <ButtonContainer>
      <label htmlFor='file-input'>
        <Span>Upload Image</Span>
        <input
          id='file-input'
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          style={{ display: "none" }}
          multiple
        />
      </label>

      <Btn onClick={generatePdfFromImages} disabled={uploadImage.length === 0}>
        Generate PDF
      </Btn>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin: auto;
`;

const Btn = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem 2rem;
  border: none;
  letter-spacing: 0.05rem;

  &:disabled {
    background-color: #ccc;
  }
`;

const Span = styled.span`
  background: #2bae66ff;
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border: none;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }
`;

export default Button;

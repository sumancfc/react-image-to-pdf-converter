import React from "react";
import styled from "styled-components";

const Image = ({ image }) => {
  return (
    <ImageContainer>
      {image.length > 0 ? (
        image.map((img, i) => (
          <Img
            key={i}
            src={img.src}
            alt={img.name}
            className='uploaded-image'
          />
        ))
      ) : (
        <ImageText>Upload Image Here</ImageText>
      )}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50vh;
  margin: 3.5rem auto;
  padding: 1.5rem;
  overflow: auto;
  background: #fdfefe;
  border-radius: 0.25rem;
  -webkit-box-shadow: 1px 2px 6px 1px #ccc;
  -moz-box-shadow: 1px 2px 6px 1px #ccc;
  box-shadow: 1px 2px 6px 1px #ccc;

  &:after {
    content: "";
    padding-right: 20px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const ImageText = styled.h4`
  margin: auto;
  font-size: 1.75rem;
  color: #2ecc71;
  letter-spacing: 1px;
  font-weight: 500;
`;

export default Image;

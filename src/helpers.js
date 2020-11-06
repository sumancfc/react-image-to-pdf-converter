import jsPDF from "jspdf";

const A4_PAPER_DIMENSIONS = {
  width: 210,
  height: 297,
};

const A4_PAPER_RATIO = A4_PAPER_DIMENSIONS.width / A4_PAPER_DIMENSIONS.height;

export const imageDimensionsOnA4 = (dimension) => {
  const isLandscapeImage = dimension.width >= dimension.height;

  if (isLandscapeImage) {
    return {
      width: A4_PAPER_DIMENSIONS.width,
      height: A4_PAPER_DIMENSIONS.width / (dimension.width / dimension.height),
    };
  }

  const imageRatio = dimension.width / dimension.height;
  if (imageRatio > A4_PAPER_RATIO) {
    const imageScaleFactor =
      (A4_PAPER_RATIO * dimension.height) / dimension.width;

    const scaledImageHeight = A4_PAPER_DIMENSIONS.height * imageScaleFactor;

    return {
      height: scaledImageHeight,
      width: scaledImageHeight * imageRatio,
    };
  }

  return {
    width: A4_PAPER_DIMENSIONS.height / (dimension.height / dimension.width),
    height: A4_PAPER_DIMENSIONS.height,
  };
};

export const fileToImageURL = (file) => (Promise) => {
  return new Promise((resolve, reject) => {
    const image = new file.type();

    image.onload = () => {
      resolve(image);
    };

    alert("Hellow");

    image.onerror = () => {
      reject(new Error("Failed to convert File to Image"));
    };

    image.src = URL.createObjectURL(file);
  });
};

export const generatePdfFromImages = (images) => {
  const doc = new jsPDF();
  doc.deletePage(1);

  images.forEach((image) => {
    const imageDimensions = imageDimensionsOnA4({
      width: image.width,
      height: image.height,
    });

    doc.addPage();
    doc.addImage(
      image.src,
      image.imageType,
      (A4_PAPER_DIMENSIONS.width - imageDimensions.width) / 2,
      (A4_PAPER_DIMENSIONS.height - imageDimensions.height) / 2,
      imageDimensions.width,
      imageDimensions.height
    );
  });

  const pdfURL = doc.output("bloburl");
  window.open(pdfURL, "_blank");
};

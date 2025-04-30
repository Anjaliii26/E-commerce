import { useState } from "react";

const MyImage = ({ image = [] }) => {
  if (!image.length || !image[0]?.url) {
    return null;
  }

  const [mainimage, setMainimage] = useState(image[0]);

  return (
    <div className="flex gap-6">
      {/* Vertical Thumbnails */}
      <div className="flex flex-col gap-4 w-1/5">
        {image.map((img, index) => (
          <figure key={index}>
            <img
              src={img.url}
              alt={img.filename}
              className="w-full h-auto object-cover rounded cursor-pointer border border-gray-300 hover:border-black"
              onMouseOver={() => setMainimage(img)}
            />
          </figure>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={mainimage.url}
          alt={mainimage.filename}
          className="w-full max-w-xl h-auto object-contain rounded shadow"
        />
      </div>
    </div>
  );
};

export default MyImage;

import React, { useState } from "react";

const CardFilp = () => {
  const imgArr = Array(2)
    .fill(1)
    .map((num, index) => num + index);

  const [cardIndex, setCardIndex] = useState<number | null>(null);

  const handleFlipCard = (index: number) => {
    setCardIndex(cardIndex === index ? null : index);
  };

  return (
    <div className="flex gap-10">
      {imgArr.map((index) => {
        return (
          <div
            key={index}
            className={`relative w-56 h-80 cursor-pointer rounded-md bg-indigo-700`}
            onClick={() => handleFlipCard(index)}>
            <div
              className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}>
              Click Me
            </div>

            <img
              src={`../image${index}.jpg`}
              alt={`image${index}`}
              className={`w-full h-full object-cover rounded-md`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardFilp;

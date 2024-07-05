import React, { useState } from "react";

const NumberInput = () => {
  const regExp = /^-?\d*\.?\d*$/; // 정수와 소수만을 허락하는 정규식
  const [number, setNumber] = useState("");

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regExp.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="bg-slate-300"
        value={number}
        onChange={onChangeNumber}></input>

      <p>{number}</p>
    </div>
  );
};

export default NumberInput;

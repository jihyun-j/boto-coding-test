import React, { useState } from "react";

const NumberInput = () => {
  const [number, setNumber] = useState("");

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, "");

    setNumber(inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  return (
    <div>
      <input
        type="text"
        className="bg-slate-300"
        value={number}
        onChange={onChangeNumber}></input>

      {number}
    </div>
  );
};

export default NumberInput;

import React, { useState } from "react";

const NumberInput = () => {
  const [number, setNumber] = useState("");

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, "");

    const decimal = inputValue.split(".");

    if (decimal.length > 2) {
      const removeSecondDecimal = decimal.slice(1).join("");
      inputValue = decimal[0] + "." + removeSecondDecimal;
    }

    let formattedNumber = decimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimal[1] !== undefined) {
      formattedNumber = formattedNumber + "." + decimal[1].slice(0, 5);
    }

    setNumber(formattedNumber);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="bg-slate-300 w-96 rounded-md p-2"
        value={number}
        placeholder="숫자를 입력해 주세요. (소수 가능)"
        onChange={onChangeNumber}></input>
    </div>
  );
};

export default NumberInput;

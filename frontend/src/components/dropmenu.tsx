import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  positionTop?: string;
  positionLeft?: string;
  width?: string;
  height?: string;
  radius?: string;
  defaultOptionText?: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  optionPaddingLeft?: string;
  backgroundColor?: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({
  options,
  positionTop = "0",
  positionLeft = "0",
  width = "200px",
  height = "30px",
  radius = "10px",
  defaultOptionText,
  fontFamily,
  fontSize,
  fontWeight,
  fontColor,
  optionPaddingLeft,
  backgroundColor,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ position: "relative", top: positionTop, left: positionLeft }}>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        style={{
          width,
          height,
          borderRadius: radius,
          fontFamily,
          fontSize,
          fontWeight,
          color: fontColor,
          paddingLeft: optionPaddingLeft,
          appearance: "none",
          backgroundColor,
        }}
      >
        {defaultOptionText ? (
          <option value="">{defaultOptionText}</option>
        ) : null}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;

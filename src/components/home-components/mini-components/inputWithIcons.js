import React from "react";

const InputWithIcons = (props) => {
  const icon = props.icon;
  const placeHolder = props.placeHolder;
  const onChange = props.onchange;
  const type = props.type;

  return (
    <div
      style={{
        backgroundColor: "#fcfcfc",
        color: "#909090",
        padding: "20px 10px",
        marginBottom: "10px",
        width: "100%",
        border: "1px solid #e0e0e0",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeHolder}
        type={type}
        style={{
          backgroundColor: "#fcfcfc",
          fontSize: "15px",
          marginLeft: "10px",
          width: "100%",
          outline: "none",
          border: "none",
        }}
      />
    </div>
  );
};

export default InputWithIcons;

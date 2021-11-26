import React from "react";

function index(props) {
  const { backColor, radius, color, width, height, size, weight, border } =
    props;
  return (
    <button
      style={{
        backgroundColor: `${backColor}`,
        borderRadius: `${radius}`,
        color: `${color}`,
        border: `${border}`,
        width: `${width}`,
        height: `${height}`,
        fontSize: `${size}`,
        fontWeight: `${weight}`,
        cursor: "pointer",
        marginLeft: "10px",
      }}
    >
      {props.children}
    </button>
  );
}

export default index;

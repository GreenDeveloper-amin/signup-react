import React from "react";

const inputs = (props) => {
  return (
    <div className={`flex space-y-1 ${props.containerStyle} `}>
      <label
        className={` ${props.LableStyle} text-right`}>
        {props.label}
      </label>
      <input
        onFocus={props.onTouch}
        // onMouseMove={props.moveMouse}
        onChange={props.onChange}
        value={props.value}
        className={`w-[240px] px-2 py-1 ${props.inputstyle} outline-none  rounded-sm border  `}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};

export default inputs;

import { useMemo } from "react";
import "./InputField2.css";

const InputField2 = ({
  label,
  labelCaption,
  placeholder,
  inputFlex,
  inputMinWidth,
  inputAlignSelf,
  propHeight,
  propDisplay,
  propMinHeight,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      flex: inputFlex,
      minWidth: inputMinWidth,
      alignSelf: inputAlignSelf,
    };
  }, [inputFlex, inputMinWidth, inputAlignSelf]);

  const placeholderStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const inputIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className="input-field" style={inputFieldStyle}>
      <div className="label1">
        <div className="label2">{label}</div>
        <div className="label-caption">{labelCaption}</div>
      </div>
      <button className="input">
        <div className="input1">
          <div className="placeholder" style={placeholderStyle}>
            {placeholder}
          </div>
          <img
            className="input-icon"
            alt=""
            src="/input-icon.svg"
            style={inputIconStyle}
          />
        </div>
      </button>
    </div>
  );
};

export default InputField2;

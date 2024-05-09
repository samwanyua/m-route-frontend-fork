import "./InputField1.css";

const InputField1 = ({ label, placeholderPlaceholder }) => {
  return (
    <div className="input-field1">
      <div className="label3">
        <div className="label4">{label}</div>
        <div className="label-caption1">Label Caption</div>
      </div>
      <div className="input2">
        <div className="input3">
          <input
            className="placeholder1"
            placeholder={placeholderPlaceholder}
            type="text"
          />
          <img className="input-icon1" alt="" src="/input-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default InputField1;

import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./InputField.css";

const InputField = ({ label }) => {
  return (
    <div className="input-field2">
      <div className="label5">
        <div className="label6">{label}</div>
        <div className="label-caption2">Label Caption</div>
      </div>
      <TextField
        className="input4"
        color="primary"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <img width="24px" height="24px" src="/input-icon.svg" />
          ),
        }}
        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
      />
    </div>
  );
};

export default InputField;

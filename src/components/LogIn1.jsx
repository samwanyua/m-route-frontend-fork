import { TextField } from "@mui/material";
import "./LogIn1.css";

const LogIn1 = () => {
  return (
    <form className="log-in2">
      <button className="header4">
        <div className="close">
          <img className="close-icon" alt="" src="/close.svg" />
        </div>
        <b className="log-in3">Log In</b>
      </button>
      <div className="fields">
        <div className="input-field3">
          <div className="label7">
            <div className="label8">Email</div>
            <div className="label-caption3">Label Caption</div>
          </div>
          <div className="input5">
            <div className="input6">
              <input
                className="placeholder2"
                placeholder="mymail@gmail.com"
                type="text"
              />
              <img className="input-icon2" alt="" src="/input-icon.svg" />
            </div>
          </div>
        </div>
        <div className="password">
          <div className="input-field4">
            <div className="label9">
              <h3 className="label10">Password</h3>
              <div className="label-caption4">Label Caption</div>
            </div>
            <TextField className="input7" color="primary" type="text" />
          </div>
          <div className="forgot-password">Forgot password?</div>
        </div>
        <div className="label-checkbox">
          <div className="checkbox1">
            <img
              className="vector-icon5"
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
          </div>
          <div className="remember-me">Remember me</div>
        </div>
      </div>
      <div className="buttons1">
        <button className="button35">
          <b className="log-in4">Log In</b>
        </button>
        <div className="sign-up5">
          <div className="dont-have-an">Don’t have an account?</div>
          <b className="sign-up6">Sign Up</b>
        </div>
      </div>
    </form>
  );
};

export default LogIn1;

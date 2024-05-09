import "./LandingPage.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img
        className="nathana-reboucas-3ysdtzqnvtq-u-icon"
        alt=""
        src="/nathanareboucas3ysdtzqnvtqunsplash-1@2x.png"
      />
      <div className="merchandiserinc-parent">
        <h1 className="merchandiserinc">Merchandiser.inc</h1>
        <div className="frame-wrapper">
          <div className="sign-in-sign-up-area-parent">
            <img
              className="sign-in-sign-up-area"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="horizontal-divider">
              <div className="sign-in-parent">
              <Link to="/login" className="sign-in" style={{ color: 'white' }}>
              Sign in
            </Link>
            <div className="line-wrapper">
              <div className="frame-child" />
            </div>
            <Link to="/signup" className="sign-up" style={{ color: 'white' }}>
              Sign up
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-reserved-message">
        <div className="frame-parent">
          <div className="all-rights-reserved-wrapper">
            <div className="all-rights-reserved">{`All rights Reserved. `}</div>
          </div>
          <img className="group-icon" loading="lazy" alt="" src="/group.svg" />
          <div className="copyright-2024-wrapper">
            <div className="copyright-2024">Copyright 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

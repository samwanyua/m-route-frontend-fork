import "./Header.css";

const Header = () => {
  return (
    <header className="header2">
      <div className="navbar2">
        <div className="merchandiserinc-wrapper1">
          <h1 className="merchandiserinc5">Merchandiser.inc</h1>
        </div>
        <div className="navbar-child">
          <div className="frame-parent3">
            <div className="iconsolidbell-container">
              <img
                className="iconsolidbell2"
                loading="lazy"
                alt=""
                src="/iconsolidbell.svg"
              />
            </div>
            <div className="vector-container">
              <img
                className="vector-icon2"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="eric-widget-label-parent">
              <div className="eric-widget-label">
                <b className="eric-widget2">Moses</b>
              </div>
              <div className="developer2">Manager</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

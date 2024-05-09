import "./Header2.css";

const Header = () => {
  return (
    <header className="header1">
      <div className="navbar1">
        <div className="merchandiserinc-frame">
          <h1 className="merchandiserinc4">Merchandiser.inc</h1>
        </div>
        <div className="bell-icon">
          <div className="widget-label-parent">
            <div className="widget-label">
              <img
                className="iconsolidbell1"
                loading="lazy"
                alt=""
                src="/iconsolidbell.svg"
              />
            </div>
            <div className="widget-label1">
              <img
                className="vector-icon1"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="sidebar-links-btn-parent">
              <div className="sidebar-links-btn">
                <b className="eric-widget1">Moses</b>
              </div>
              <div className="developer1">Manager</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

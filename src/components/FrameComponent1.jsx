import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="header-wrapper">
      <header className="header">
        <div className="navbar">
          <div className="merchandiserinc-wrapper">
            <h1 className="merchandiserinc3">Merchandiser.inc</h1>
          </div>
          <div className="navbar-inner">
            <div className="group-div">
              <div className="iconsolidbell-wrapper">
                <img
                  className="iconsolidbell"
                  loading="lazy"
                  alt=""
                  src="/iconsolidbell.svg"
                />
              </div>
              <div className="vector-wrapper">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="frame-parent2">
                <div className="eric-widget-wrapper">
                  <b className="eric-widget">Moses</b>
                </div>
                <div className="developer">Manager</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent1;

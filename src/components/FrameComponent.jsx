import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="route-card-assignment-wrapper">
      <div className="route-card-assignment">
        <div className="route-plan-assignment">Route Plan Assignment</div>
        <div className="listbox-main">
          <div className="listboxbg" />
          <div className="placeholder-text">
            <div className="select-occupation">Merchandiser Names</div>
          </div>
          <div className="route-plan-assignment1">
            <img className="chevron-icon" alt="" src="/chevron.svg" />
          </div>
        </div>
        <div className="date-picker">
          <img className="date-picker-icon" alt="" src="/vector-1.svg" />
          <div className="inputs">
            <div className="text-field">
              <div className="state-layer">
                <div className="content">
                  <div className="label-text">
                    <div className="label-text1">Date Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-area">
          <div className="content-area-wrapper">
            <div className="content-area">
              <div className="container">
                <div className="label-container">
                  <div className="label">Instructions</div>
                </div>
              </div>
              <div className="min-height">
                <p className="blank-line">&nbsp;</p>
                <p className="blank-line1">&nbsp;</p>
              </div>
            </div>
          </div>
          <div className="resize-handle">
            <div className="glyph-area">
              <div className="emoticon-outline">󰑝</div>
            </div>
          </div>
        </div>
        <div className="button32">
          <div className="button33">Assign</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

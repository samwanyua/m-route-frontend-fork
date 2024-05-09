import "./SidebarLinks1.css";

const SidebarLinks = () => {
  return (
    <div className="sidebar-links">
      <div className="btns">
        <img className="icons" loading="lazy" alt="" src="/icons.svg" />
        <h3 className="routes-plan">Home</h3>
      </div>
      <button className="btns1">
        <img className="icons1" alt="" src="/icons-1.svg" />
        <div className="routes-plan1">Routes plan</div>
      </button>
      <div className="btns2">
        <img className="icons2" loading="lazy" alt="" src="/icons-21.svg" />
        <h3 className="routes-plan2">Settings</h3>
      </div>
    </div>
  );
};

export default SidebarLinks;

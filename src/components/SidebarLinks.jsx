import "./SidebarLinks.css";

const SidebarLinks = () => {
  return (
    <div className="sidebar-links2">
      <div className="btns6">
        <img className="icons6" loading="lazy" alt="" src="/icons.svg" />
        <div className="routes-plan6">Home</div>
      </div>
      <div className="btns7">
        <img className="icons7" alt="" src="/icons-11.svg" />
        <div className="routes-plan7">Routes plan</div>
      </div>
      <button className="btns8">
        <img className="icons8" alt="" src="/icons-2.svg" />
        <div className="routes-plan8">Settings</div>
      </button>
    </div>
  );
};

export default SidebarLinks;

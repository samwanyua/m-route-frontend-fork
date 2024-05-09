import SidebarLinks from "../components/SidebarLinks1";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./DashboardManager1.css";

const DashboardManager = () => {
  return (
    <div className="dashboard-manager">
      <div className="sidebar">
        <SidebarLinks />
      </div>
      <FrameComponent1 />
      <div className="dashboard-manager-child" />
      <div className="switch-page-wrapper">
        <div className="switch-page">
          <div className="button">
            <div className="button1">Assign Route</div>
          </div>
          <div className="button2">
            <div className="button3">View Assigned</div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default DashboardManager;

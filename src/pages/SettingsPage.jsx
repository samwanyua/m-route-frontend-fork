import SidebarLinks from "../components/SidebarLinks";
import Header from "../components/Header";
import "./SettingsPage.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="sidebar2">
        <SidebarLinks />
      </div>
      <Header />
    </div>
  );
};

export default SettingsPage;

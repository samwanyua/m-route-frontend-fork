import Header from "../components/Header1";
import INSTANCE from "../components/INSTANCE";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <INSTANCE />
    </div>
  );
};

export default DashboardLayout;

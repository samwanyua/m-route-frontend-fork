
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DashboardManager1 from './pages/DashboardManager1';
import DashboardManager from './pages/DashboardManager';
import SettingsPage from './pages/SettingsPage';
import DashboardLayout from './pages/DashboardLayout';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


function App() {
  

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
case "/dashboardmanager":
        title = "";
        metaDescription = "";
        break;
case "/dashboardmanager1":
        title = "";
        metaDescription = "";
        break;
case "/settingspage":
        title = "";
        metaDescription = "";
        break;
case "/dashboardlayout":
        title = "";
        metaDescription = "";
        break;
case "/signup":
        title = "";
        metaDescription = "";
        break;
case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
<Route path="/dashboardmanager" element={<DashboardManager/>}/>
<Route path="/dashboardmanager1" element={<DashboardManager1/>}/>
<Route path="/settingspage" element={<SettingsPage/>}/>
<Route path="/dashboardlayout" element={<DashboardLayout/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/login" element={<LogIn/>}/>
    </Routes>
  );
}
export default App;

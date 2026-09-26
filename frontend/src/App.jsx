import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/homepage/Navbar";
import Footer from "./components/homepage/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./components/homepage/Home";
import Mission from "./components/missionpage/Mission";
import Program from "./components/programpage/Program";
import Partner from "./components/partnerpage/Partner";
import Donate from "./components/Donatepage/Donate";
import Signin from "./components/profilepage/Signin";
import Signup from "./components/profilepage/Signup";

const App = () => {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <>
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/program" element={<Program />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default App;
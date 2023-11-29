import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import LogTalent from "./pages/LoginAccount/index";
import ForgotPassword from "./pages/LoginAccount/ForgotPassword";
import { Otp } from "./pages/LoginAccount/Otp";
import ProfileLanding from "./pages/ProfileLanding";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResetPassword from "./pages/LoginAccount/ResetPassword";
import Verification from "./pages/CreateAccount/Verification.jsx";
import Explore from "./components/hero/Explore";
import SuccessModular from "./components/SuccessModular";
import Registration from "./pages/CreateAccount/Registration/index.jsx";
import Chat from "./pages/Dashboard/Chat";
import Dashboard from "./pages/Dashboard";
import EmployerProfileForm from "./pages/EmployerProfile/index.jsx";
import CompleteYourProfile from "./pages/CompleteYourProfile/Agent/index.jsx";
import DashProfile from "./pages/Dashboard/TechTalent/myProfile/DashProfile.jsx";
import Passwordsettings from "./pages/Dashboard/TechTalent/setting/Passwordsettings.jsx";
import DashboardProfileForm from "./pages/Dashboard/TechTalent/DashboardProfileForm/index.jsx";
import DashboardMainSide from "./pages/Dashboard/TechTalent/DashboardMainSide.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Registration */}
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/register/employer" element={<Registration />} />
        <Route path="/register/agent" element={<Registration />} />
        <Route path="/register/techtalent" element={<Registration />} />
        {/* Log in */}
        <Route path="/login" element={<LogTalent />} />
        <Route path="/profilelanding" element={<ProfileLanding />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/techprofileform" element={<DashboardProfileForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employerprofile" element={<EmployerProfileForm />} />

        {/* Modals */}
        <Route path="/mailverification" element={<Verification />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="test"
          element={
            <SuccessModular
              title="Verification Successful"
              description="Congratulations your account has been verified successfully"
              action={{
                path: "/login",
                text: " Login to your account",
              }}
            />
          }
        />
        <Route path="/complete-profile" element={<CompleteYourProfile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardMainSide />} />
          <Route path="messages" element={<Chat />} />
          <Route path="profile" element={<DashProfile />} />
          <Route path="applications" element={<h2>My Applications </h2>} />
          <Route path="saved" element={<h2>Saved Jobs </h2>} />
          <Route path="analytics" element={<h2>Analytics </h2>} />
          <Route path="profile-details" element={<h2>Profile Details</h2>} />
          <Route path="password-settings" element={<Passwordsettings />} />
          <Route path="Privacy" element={<h2>Privacy</h2>} />
          <Route
            path="terms-and-conditions"
            element={<h2>Terms and Conditions</h2>}
          />
          <Route path="help" element={<h2>Help </h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

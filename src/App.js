import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import TechTalent from "./pages/CreateAccount/TechTalent";
import  LogTalent  from "./pages/LoginAccount/index";
import ForgotPassword from "./pages/LoginAccount/ForgotPassword";
import { Otp } from "./pages/LoginAccount/Otp";
import ProfileLanding from "./pages/ProfileLanding";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResetPassword from "./pages/LoginAccount/ResetPassword";
import EmailVeri from "./pages/CreateAccount/TechTalent/EmailVeri";
import Explore from "./components/hero/Explore";
import SuccessModular from "./components/SuccessModular";
import {default as EmployerRegistration} from "./pages/CreateAccount/Employer";
import Agent from "./pages/CreateAccount/Agent";
import EmployerProfileForm from "./pages/CreateAccount/Employer/EmployerProfile";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Registration */}
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/register/employer" element={<EmployerRegistration />} />
        <Route path="/register/agent" element={<Agent />} />
        <Route path="/register/techtalent" element={<TechTalent />} />
        {/* Log in */}
        <Route path="/login" element={<LogTalent/>}/>
        <Route path="/profilelanding" element={<ProfileLanding/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employerprofile" element={<EmployerProfileForm />} />

        {/* Modals */}
        <Route path="/mailverification" element={<EmailVeri />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="test" element={<SuccessModular title="Verification Successful" description="Congratulations your account has been verified successfully" action={{
          path: "/login",
          text:" Login to your account"
        }} />} />

      </Routes>
      
    </>
  );
}

export default App;

import React, { useState,useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logo_colored.png';
import Navbar from '../components/header/Navbar';
import '../components/header/header.scss';
import Inputs from "../../src/components/accounts/Inputs";
import { ReactComponent as Search } from "../../src/static/icons/round-search.svg";
import { ReactComponent as Filter } from "../../src/static/icons/filter.svg";
import focusParent from "../../src/utils/functions/focusParent";
import blurParent from "../../src/utils/functions/blurParent";
import { ReactComponent as Messages } from "../../src/static/icons/mail-unread.svg";
import { ReactComponent as Notification } from "../../src/static/icons/notification-new.svg";
import { ReactComponent as Profile } from "../../src/static/icons/profile.svg";

const titles = [
  {
    title1:"",
    span: "Connect",
    title: "with Employers, Tech Talents and Agents"
  },
  {
    title1:"Enjoy",
    span: "Verified",
    title: "services at your convenience"
  },
  {
    title1:"Hire a",
    span: "Professional",
    title: "Tech Talent with Ease. Enjoy"
  },
]

const ProfileLanding = () => {
  const [search, setSearch] = useState("");
  const [heroTitle, setHeroTitle] = useState(0);

  const selectRandomTitle = useCallback(() => {
    const titleIndex = Math.floor(Math.random() * titles.length);
    setHeroTitle(titles[titleIndex]);
  }, []);

  useEffect(() => {
    const intervalTitle = setInterval(selectRandomTitle, 2500);
    return () => {
      clearInterval(intervalTitle); // Clear the interval on unmount
    };
  }, [selectRandomTitle])
  const handleSearch = () => {};
  const filterSearch = () => {};
  return (
    <div className='profile-landing'>
      <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"80rem", margin:"auto"}}>
        <div className="h-logo" style={{width:"5.5rem", height:"3.2rem"}}>
          <img src={Logo} alt="Nxg Company Logo" className='logo' />
        </div>
        <div className="searchBar">
          <Inputs
            className="searchInput"
            type="search"
            placeholder={"Search"}
            value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={focusParent}
                    onBlure={blurParent}
          />
          <Search onClick={handleSearch} />
          <Filter onClick={filterSearch} />
      </div>
        <Navbar />
        <Link to="./notifications">
        <Notification />
      </Link>
      <Link to="./notifications">
        <Messages />
      </Link>
      <Link to="./notifications">
        <Profile />
      </Link>
      </header>
      <div style={{maxWidth: "35rem", margin: "11% 6%", padding: "1rem", fontFamily: "Inter", color: "#fff"}}>
        {/* <h1 style={{fontSize: "2.5rem", fontWeight: "800", lineHeight: "3rem"}}>
          <span style={{color: "#2596be"}}>Connect</span> with Employers, Tech Talents and Agents
        </h1> */}
        <h1 className="land-title">
          {heroTitle.title1} {""}
           <span>{heroTitle.span}</span> {""}
          {heroTitle.title}
        </h1>
        <p style={{fontSize: "0.95rem", fontWeight: "300", lineHeight: "1.3rem", margin: "1rem 0"}}>
          Get started by completing your profile.
        </p>
        <div style={{fontSize: "0.7rem", margin: "1.6rem 0"}}>
          <Link to={"/techtalent"} style={{color: "#fff", fontWeight: "600", border: ".07rem solid #2596be",
             borderRadius: "0.4rem",  padding: ".5rem 2rem", background: "#2596be"}}>
              Complete your profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileLanding
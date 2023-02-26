import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import Swal from "sweetalert2";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const success = () => {
    const token = localStorage.getItem("token")
    fetch(`http://womenhackathon.pythonanywhere.com/family/sms/`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` },
    })
      .then((result) => {
        console.log(result)
        Swal.fire({
          icon: 'success',
          title: 'The alert message is shared with all your contacts',
          showConfirmButton: false,
          timer: 3000
        })
      })
      .catch(() => {
        alert('Error in the Code');
      });
  }

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" style={{ textAlign: "left" }}>
            <EmergencyShareIcon style={{ width: "5vh", height: "5vh" }} onClick={success} />
            Red Rhythm
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/homepage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/family"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Family
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/pcostracking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pcos Tracking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dailyinsights"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Daily Insights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/doctors"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="http://localhost:3001/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop Now
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="https://chatsystem-production.up.railway.app/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="https://zoom-clone-production-1d01.up.railway.app/e8ab646f-f9c1-41cf-aec0-11711f3b62c6"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Video Call
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}><MenuIcon /></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
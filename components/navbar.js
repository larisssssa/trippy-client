import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../context/state";

export default function Navbar() {
  const { token, profile } = useAppContext();
  const hamburger = useRef();
  const navbar = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // Handle user clicking outside navbar and closing dropdown menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Was the click outside the navbar/menu?
      if (
        navbar.current &&
        !navbar.current.contains(e.target) &&
        hamburger.current &&
        !hamburger.current.contains(e.target)
      ) {
        // Is the navbar/menu open/is-active? If yes, close the menu
        if (navbar.current.classList.contains("is-active")) {
          showMobileNavbar();
        }
      }
    };
    // Was there a click?
    document.addEventListener("click", handleOutsideClick);
    //Unmount after
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle("is-active");
    navbar.current.classList.toggle("is-active");
  };

  const getLoggedInButtons = () => {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <span className="icon">
            <i className="fas fa-user-circle is-medium"></i>
          </span>
        </a>
        <div className="navbar-dropdown is-right">
          <Link href="/home" className="navbar-item">
            Home
          </Link>
          

          <hr className="navbar-divider"></hr>
          <a
            className="navbar-item"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          >
            Log out
          </a>
        </div>
      </div>
    );
  };

  const getLoggedOutButtons = () => {
    return (
      <div className="navbar-item">
        <div className="buttons">
          <Link href="/register">
            <strong>Sign up</strong>
          </Link>
          <Link href="/login">
            Log in
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav
      className="navbar mb-3 is-warning px-5 is-fixed-top is-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: "4rem", height: "4rem" }}
            className="relative"
          />
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref={hamburger}
          onClick={showMobileNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={navbar} onClick={showMobileNavbar}>
        <div className="navbar-start">
          <Link href="/home" className="navbar-item">
            Home
          </Link>
          <Link href="/trips" className="navbar-item">
            Trips
          </Link>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()}
        </div>
      </div>
    </nav>
  );
}

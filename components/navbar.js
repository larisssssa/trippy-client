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
        // if (navbar.current.classList.contains("is-active")) {
        //   showMobileNavbar();
        // }
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
      <div>
        <a>
          <span>
            <i></i>
          </span>
        </a>
        <div>
          <Link href="/home">Home</Link>

          <hr></hr>
          <a
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
      <div>
        <div>
          <Link href="/register">
            <strong>Sign up</strong>
          </Link>
          <Link href="/login">Log in</Link>
        </div>
      </div>
    );
  };

  return (
    <nav role="navigation" aria-label="main navigation">
      <div>
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>
        <a
          role="button"
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

      <div ref={navbar} onClick={showMobileNavbar}>
        <div>
          <Link href="/home">Home</Link>
          <Link href="/trips">Trips</Link>
        </div>
        <div>{isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()}</div>
      </div>
    </nav>
  );
}

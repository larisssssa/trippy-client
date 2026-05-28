import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
import Link from "next/link";

export default function Navbar() {
  const { token } = useAppContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <Link className="navbar-item" href="/home">
              Home
            </Link>
            <Link className="navbar-item" href="/trips">
              My Trips
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              {isLoggedIn ? (
                <a
                  className="button is-light"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  Log out
                </a>
              ) : (
                <div className="buttons">
                  <a className="button is-primary" href="register">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="login">
                    Log in
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

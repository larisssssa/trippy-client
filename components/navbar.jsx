import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";

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
        class="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <a class="navbar-item" href="/home">
              Home
            </a>
            <a class="navbar-item" href="/trips">
              My Trips
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              {isLoggedIn ? (
                <a
                  class="button is-light"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  Log out
                </a>
              ) : (
                <div class="buttons">
                  <a class="button is-primary" href="register">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light" href="login">
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

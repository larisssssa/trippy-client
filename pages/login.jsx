import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAppContext } from "../context/state";
import { login } from "../data/auth";
import Link from "next/link";

export default function Login() {
  const { setToken } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    login(user).then((res) => {
      if (res.token) {
        setToken(res.token);
        router.push("/");
      }
    });
  };

  return (
    <div className="container is-max-tablet">
      <div className="section">
        <form className="box">
          <h1 className="title has-text-centered">Welcome Back!</h1>
          <div className="field">
            <label className="label">Username</label>

            <input
              id="username"
              type="text"
              className="input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">Password</label>

            <input
              id="password"
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit" onClick={submit}>
                Login
              </button>
            </div>
            <div className="control">
              <Link href="register" className="button is-link">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

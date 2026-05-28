import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAppContext } from "../context/state";
import { register } from "../data/auth";

export default function Register() {
  const { setToken } = useAppContext();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
  });
  const router = useRouter();

  const updateUser = (e) => {
    const copy = { ...user };
    copy[e.target.id] = e.target.value;
    setUser(copy);
  };

  const submit = (e) => {
    e.preventDefault();

    register(user).then((res) => {
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
          <h1 className="title has-text-centered">Welcome!</h1>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                id="first_name"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                id="last_name"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                id="email"
                type="email"
                onChange={updateUser}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                id="username"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                id="password"
                type="password"
                onChange={updateUser}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit" onClick={submit}>
                Submit
              </button>
            </div>
            <div className="control">
              <Link href="/login" className="button is-link">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

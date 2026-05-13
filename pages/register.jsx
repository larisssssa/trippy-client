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
    <div class="container is-max-tablet">
      <div class="section">
        <form class="box">
          <h1 class="title has-text-centered">Welcome!</h1>
          <div class="field">
            <label class="label">First Name</label>
            <div class="control">
              <input
                class="input"
                id="first_name"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
              <input
                class="input"
                id="last_name"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                id="email"
                type="email"
                onChange={updateUser}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                id="username"
                type="text"
                onChange={updateUser}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                id="password"
                type="password"
                onChange={updateUser}
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit" onClick={submit}>
                Submit
              </button>
            </div>
            <div class="control">
              <Link href="/login" class="button is-link">
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

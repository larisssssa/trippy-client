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
    <div class="container is-max-tablet">
      <div class="section">
        <form class="box">
          <h1 class="title has-text-centered">Welcome Back!</h1>
          <div class="field">
            <label class="label">Username</label>

            <input
              id="username"
              type="text"
              class="input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="field">
            <label class="label">Password</label>

            <input
              id="password"
              type="password"
              class="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit" onClick={submit}>
                Login
              </button>
            </div>
            <div class="control">
              <Link href="register" class="button is-link">
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

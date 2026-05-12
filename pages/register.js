import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Input } from "../components/form-elements/input";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { useAppContext } from "../context/state";
import { register } from "../data/auth";

export default function Register() {
  const { setToken } = useAppContext();

  const firstName = useRef("");
  const lastName = useRef("");
  const username = useRef("");
  const password = useRef("");
  const email = useRef("");
  const address = useRef("");
  const phoneNumber = useRef("");

  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      address: address.current.value,
      phone_number: phoneNumber.current.value,
    };

    register(user).then((res) => {
      if (res.token) {
        setToken(res.token);
        router.push("/");
      }
    });
  };

  return (
    <div>
      <div>
        <form>
          <h1>Welcome!</h1>
          <Input
            id="firstName"
            refEl={firstName}
            type="text"
            label="First Name"
          />
          <Input id="lastName" refEl={lastName} type="text" label="Last Name" />
          <Input id="email" refEl={email} type="text" label="Email" />
          <Input
            id="phoneNumber"
            refEl={phoneNumber}
            type="text"
            label="Phone Number"
          />
          <Input id="username" refEl={username} type="text" label="Username" />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="Password"
          />

          <div>
            <div>
              <button onClick={submit}>Submit</button>
            </div>
            <div>
              <Link href="/login">
                <button>Cancel</button>
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

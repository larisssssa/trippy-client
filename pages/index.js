import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Login from "./login";

export default function Index() {
  return <Login />;
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Home from "./home";

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

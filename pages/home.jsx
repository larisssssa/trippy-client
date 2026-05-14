import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Home() {
  return <></>;
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

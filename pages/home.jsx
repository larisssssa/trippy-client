import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="title">Welcome</h1>
        </div>
        <div className="buttons is-grouped">
          <a className="button" href="trips/new">
            New Trip
          </a>
          <a className="button" href="trips/">
            My Trips
          </a>
        </div>
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div class="container">
        <div class="section">
          <h1 class="title">Welcome</h1>
        </div>
        <div class="buttons is-grouped">
          <a class="button" href="trips/new">
            New Trip
          </a>
          <a class="button" href="trips/">
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

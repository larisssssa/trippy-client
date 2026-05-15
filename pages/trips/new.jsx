import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import { NewTripForm } from "../../components/trip/form";

export default function NewTrip() {
  return (
    <>
      <div class="container">
        <NewTripForm />
      </div>
    </>
  );
}
NewTrip.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

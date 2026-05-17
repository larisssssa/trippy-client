import { NewAttractionForm } from "../../../components/attraction/form";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";

export default function NewAttraction() {
  return (
    <>
      <div class="container is-max-tablet">
        <NewAttractionForm />
      </div>
    </>
  );
}
NewAttraction.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

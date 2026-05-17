import { NewAttendeeForm } from "../../../components/attendee/form";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";

export default function NewAttendee() {
  return (
    <>
      <div class="container is-max-tablet">
        <NewAttendeeForm />
      </div>
    </>
  );
}
NewAttendee.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

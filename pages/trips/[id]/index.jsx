import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getTripById } from "../../../data/trips";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar";
import { TripDetail } from "../../../components/trip/details";

export default function TripDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [trip, setTrip] = useState({});

  const refresh = () => {
    getTripById(id).then((data) => {
      if (data) {
        setTrip(data);
      }
    });
  };
  useEffect(() => {
    if (id) {
      refresh();
    }
  }, [id]);

  return (
    <>
      <div class="container">
        <TripDetail trip={trip} key={trip.id}/>
      </div>
    </>
  );
}
TripDetails.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

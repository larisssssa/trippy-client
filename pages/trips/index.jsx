import { useEffect, useState } from "react";
import { getTrips } from "../../data/trips";
import { TripCard } from "../../components/trip/card";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    getTrips().then((trips) => {
      setTrips(trips);
    });
  }, []);

  return (
    <div class="container">
      <div class="section">
        <h1 class="title">My Trips</h1>
        <div class="columns ">
          {trips.map((trip) => (
            <TripCard trip={trip} key={trip.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
Trips.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

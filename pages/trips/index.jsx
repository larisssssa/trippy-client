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
        <div class="is-grouped">
          <p class="title">My Trips</p>
          <a href="/new" class="button">
            New Trip
          </a>
        </div>
      </div>
      <div class="section">
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

import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { TripCard } from "../components/trip/card";
import { getTrips } from "../data/trips";

export default function Home() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    getTrips().then((trips) => {
      setTrips(trips);
    });
  }, []);

  return (
      <div className="container">
        <header className="header">Header</header>
        <div class="columns ">
          {trips.map((trip) => (
            <TripCard trip={trip} key={trip.id} />
          ))}
        </div>
      </div>
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

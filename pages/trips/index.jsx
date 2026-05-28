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
    <div className="container">
      <div className="section">
        <div className="is-grouped">
          <p className="title">My Trips</p>
          <a href="trips/new" className="button">
            New Trip
          </a>
        </div>
      </div>
      <div className="section">
        <div className="fixed-grid has-4-cols">
          <div className="grid">
            {trips.map((trip) => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </div>
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

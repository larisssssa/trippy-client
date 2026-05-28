import { useState } from "react";
import { editTripDetails } from "../../data/trips";
import { useRouter } from "next/router";
import Link from "next/link";

export function EditTripForm({ trip }) {
  const router = useRouter();
  const { id } = router.query;
  const [editedTrip, setEditedTrip] = useState({
    name: trip.name,
    destination: trip.destination,
    country: trip.country,
    departure_date: trip.departure_date,
    return_date: trip.return_date,
    imageurl: trip.imageurl,
    creator: trip.creator,
  });
  const updateTrip = (e) => {
    const copy = { ...editedTrip };
    copy[e.target.id] = e.target.value;
    setEditedTrip(copy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTripDetails(editedTrip, id).then(() => router.push(`/trips/${id}`));
  };
  return (
    <>
      <div className="section">
        <form className="box">
          <p className="title has-text-centered">Edit trip!</p>
          <div className="field">
            <label className="label">Trip Name</label>
            <div className="control">
              <input
                className="input"
                id="name"
                type="text"
                defaultValue={trip.name}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Destination</label>
            <div className="control">
              <input
                className="input"
                id="destination"
                type="text"
                defaultValue={trip.destination}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input
                className="input"
                id="country"
                type="text"
                defaultValue={trip.country}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Departure</label>
            <div className="control">
              <input
                className="input"
                id="departure_date"
                type="date"
                defaultValue={trip.departure_date}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Return</label>
            <div className="control">
              <input
                className="input"
                id="return_date"
                type="date"
                defaultValue={trip.return_date}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image link</label>
            <div className="control">
              <input
                className="input"
                id="imageurl"
                type="text"
                defaultValue={trip.imageurl}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Save Trip
              </button>
            </div>
            <div className="control">
              <Link href="/home" className="button is-link">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

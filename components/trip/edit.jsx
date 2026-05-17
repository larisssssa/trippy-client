import { useState } from "react";
import { editTripDetails } from "../../data/trips";
import { useRouter } from "next/router";

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
      <div class="section">
        <form class="box">
          <p class="title has-text-centered">Edit trip!</p>
          <div class="field">
            <label class="label">Trip Name</label>
            <div class="control">
              <input
                class="input"
                id="name"
                type="text"
                defaultValue={trip.name}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Destination</label>
            <div class="control">
              <input
                class="input"
                id="destination"
                type="text"
                defaultValue={trip.destination}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input
                class="input"
                id="country"
                type="text"
                defaultValue={trip.country}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Departure</label>
            <div class="control">
              <input
                class="input"
                id="departure_date"
                type="date"
                defaultValue={trip.departure_date}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Return</label>
            <div class="control">
              <input
                class="input"
                id="return_date"
                type="date"
                defaultValue={trip.return_date}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image link</label>
            <div class="control">
              <input
                class="input"
                id="imageurl"
                type="text"
                defaultValue={trip.imageurl}
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={handleSubmit}>
                Save Trip
              </button>
            </div>
            <div class="control">
              <a href="/home" class="button is-link">
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

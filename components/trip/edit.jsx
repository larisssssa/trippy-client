import { useState } from "react";

export function EditTripForm({ trip }) {
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
    const copy = { ...trip };
    copy[e.target.id] = e.target.value;
    setEditedTrip(copy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTrip(trip).then((res) => {
      if (!res || !res.id) {
        return;
      } else {
        addUserToTrip(res.id);
      }
      router.push("/trips");
    });
  };
  return (
    <>
      <div class="section">
        <form class="box">
          <p class="title has-text-centered">Create a new trip!</p>
          <div class="field">
            <label class="label">Trip Name</label>
            <div class="control">
              <input
                class="input"
                id="name"
                type="text"
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
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={handleSubmit}>
                Create Trip
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

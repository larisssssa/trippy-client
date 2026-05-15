import { useState } from "react";

export function NewTripForm() {
  const [trip, setTrip] = useState({
    name: "",
    destination: "",
    country: "",
    departure_date: "",
    return_date: "",
    imageurl: "",
  });

  const updateTrip = (e) => {
    const copy = { ...trip };
    copy[e.target.id] = e.target.value;
    setTrip(copy);
  };
  return (
    <>
      <div class="section">
        <form class="box">
          <div class="field">
            <label class="label">Trip Name</label>
            <div class="control">
              <input
                class="input"
                id="name"
                type="text"
                onChange={updateTrip}
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
            <label class="label">Departure</label>
            <div class="control">
              <input
                class="input"
                id="departure"
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
                id="return"
                type="date"
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                class="input"
                id="image"
                type="text"
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Create Trip</button>
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

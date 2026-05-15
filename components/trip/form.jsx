import { useEffect, useState } from "react";
import { getUser } from "../../data/auth";
import { createNewTrip, createNewTripUser } from "../../data/trips";
import { useRouter } from "next/router";

export function NewTripForm() {
  const [user, setUser] = useState(0);
  const [trip, setTrip] = useState({
    name: "",
    destination: "",
    country: "",
    departure_date: "",
    return_date: "",
    imageurl: "",
    creator: "",
  });
  const router = useRouter();

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const updateTrip = (e) => {
    const copy = { ...trip };
    if (copy.creator == "") {
      copy.creator = user.id;
    }
    copy[e.target.id] = e.target.value;
    setTrip(copy);
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

  const addUserToTrip = (id) => {
    const username = { username: user.username };
    createNewTripUser(id, username);
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

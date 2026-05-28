import { useEffect, useState } from "react";
import { getUser } from "../../data/auth";
import { createNewTrip, createNewTripUser } from "../../data/trips";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <div className="section">
        <form className="box">
          <p className="title has-text-centered">Create a new trip!</p>
          <div className="field">
            <label className="label">Trip Name</label>
            <div className="control">
              <input
                className="input"
                id="name"
                type="text"
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
                onChange={updateTrip}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Create Trip
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

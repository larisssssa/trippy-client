import { useEffect, useState } from "react";
import { getUser } from "../../data/auth";
import { useRouter } from "next/router";
import {
  deleteTrip,
  removeTripAttendee,
  removeTripAttraction,
} from "../../data/trips";
import Link from "next/link";

export function TripDetail({ trip }) {
  const [user, setUser] = useState(0);
  const router = useRouter();
  const [username, setUsername] = useState({ username: "" });
  const [attraction, setAttraction] = useState({ id: "" });

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    const copy = { ...username };
    copy.username = user.username;
    setUsername(copy);
  }, [user]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = () => {
    if (window.confirm("Would you like to delete this trip?")) {
      deleteTrip(trip.id);
      router.push("/trips");
    } else {
      console.log("no");
    }
  };

  const handleRemoveAttendee = () => {
    if (window.confirm("Would you like to leave this trip?")) {
      removeTripAttendee(trip.id, username);
      router.push("/trips");
    } else {
      console.log("no");
    }
  };

  const updateAttraction = (e) => {
    const copy = { ...attraction };
    copy.id = parseInt(e.target.id);
    setAttraction(copy);
  };

  const handleRemoveAttraction = (e) => {
    if (window.confirm("Would you like to remove this attraction?")) {
      removeTripAttraction(trip.id, attraction).then(router.reload());
    } else {
      console.log("no");
    }
  };

  return (
    <>
      {trip.id != null ? (
        <>
          <div className="section">
            <div className="is-relative">
              <figure className="image">
                <img src={trip.imageurl} alt={`View of ${trip.destination}`} />
                <p className="title is-overlay has-text-centered has-text-white is-1 is-flex is-align-items-end is-justify-content-center">
                  {trip.name}
                </p>
              </figure>
            </div>
          </div>
          <div className="section">
            <div className="columns is-6">
              <div className="column is-one-quarter ">
                <div className="box">
                  <p className="title is-4 has-text-centered">
                    Details{" "}
                    {user.id == trip.creator ? (
                      <>
                        <a
                          href={`${trip.id}/edit`}
                          className="button is-light is-small"
                        >
                          ~
                        </a>{" "}
                        <button
                          onClick={handleDelete}
                          className="button is-light is-small is-danger"
                        >
                          x
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
                  <hr />
                  <div className="content">
                    <p className="title is-5">Destination:</p>
                    <p className="subtitle is-6">
                      {trip.destination}, {trip.country}
                    </p>
                  </div>
                  <div className="content">
                    <p className="title is-5">Departure:</p>
                    <p className="subtitle is-6">
                      {formatDate(trip.departure_date)}
                    </p>
                  </div>
                  <div className="content">
                    <p className="title is-5">Return:</p>
                    <p className="subtitle is-6">
                      {formatDate(trip.return_date)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="column is-one-quarter">
                <div className="box">
                  <p className="title is-4 has-text-centered">
                    Attendees{" "}
                    {user.id == trip.creator ? (
                      <a
                        href={`${trip.id}/attendee`}
                        className="button is-light is-small"
                      >
                        +
                      </a>
                    ) : (
                      <></>
                    )}
                  </p>
                  <hr />
                  <div className="">
                    {trip.attendees?.map((attendee) => {
                      return (
                        <div className="block" key={attendee.id}>
                          <span className="title is-5 " key={attendee.user.id}>
                            {attendee.user.first_name} {attendee.user.last_name}{" "}
                            {attendee.user.id == user.id &&
                            attendee.user.id != trip.creator ? (
                              <button
                                className="delete is-small"
                                onClick={handleRemoveAttendee}
                              ></button>
                            ) : (
                              <></>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="column is-one-half">
                <div className="box">
                  <p className="title is-4 has-text-centered">
                    Attractions{" "}
                    <a
                      href={`${trip.id}/attraction`}
                      className="button is-light is-small"
                    >
                      +
                    </a>
                  </p>
                  <hr />
                  <div className="fixed-grid has-2-cols">
                    <div className="grid">
                      {trip.attractions?.map((attr) => {
                        return (
                          <div
                            className="cell"
                            key={attr.attraction.id}
                            id={attr.attraction.id}
                            onMouseEnter={updateAttraction}
                          >
                            <div className="card">
                              <div className="card-image">
                                <figure className="image">
                                  <img
                                    src={attr.attraction.imageurl}
                                    alt={`Image of ${attr.attraction.name}`}
                                  ></img>
                                </figure>
                              </div>
                              <div className="card-content">
                                <p className="title is-6">
                                  {attr.attraction.name}
                                </p>
                                <p className="subtitle is-6">
                                  {attr.attraction.description}
                                </p>
                                <span className="tag is-light">
                                  {attr.attraction.category.name}
                                </span>
                              </div>
                              {attr.user == user.id ? (
                                <div className="card-footer">
                                  <button
                                    className="card-footer-item"
                                    id={attr.attraction.id}
                                    onClick={handleRemoveAttraction}
                                  >
                                    Delete
                                  </button>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="section">
          <section className="hero has-background-light">
            <div className="hero-body">
              <p className="title">Page not found</p>
              <Link href="/trips" className="button">
                Return to My Trips
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

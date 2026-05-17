import { useEffect, useState } from "react";
import { getUser } from "../../data/auth";

export function TripDetail({ trip }) {
  const [user, setUser] = useState(0);

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {trip.id != null ? (
        <>
          <div class="section">
            <div class="is-relative">
              <figure class="image">
                <img src={trip.imageurl} alt={`View of ${trip.destination}`} />
                <p class="title is-overlay has-text-centered has-text-white is-1 is-flex is-align-items-end is-justify-content-center">
                  {trip.name}
                </p>
              </figure>
            </div>
          </div>
          <div class="section">
            <div class="columns is-6">
              <div class="column is-one-quarter ">
                <div class="box">
                  <p class="title is-4 has-text-centered">
                    Details{" "}
                    {user.id == trip.creator ? (
                      <a
                        href={`${trip.id}/edit`}
                        class="button is-light is-small"
                      >
                        ~
                      </a>
                    ) : (
                      <></>
                    )}
                  </p>
                  <hr />
                  <div class="content">
                    <p class="title is-5">Destination:</p>
                    <p class="subtitle is-6">
                      {trip.destination}, {trip.country}
                    </p>
                  </div>
                  <div class="content">
                    <p class="title is-5">Departure:</p>
                    <p class="subtitle is-6">
                      {formatDate(trip.departure_date)}
                    </p>
                  </div>
                  <div class="content">
                    <p class="title is-5">Return:</p>
                    <p class="subtitle is-6">{formatDate(trip.return_date)}</p>
                  </div>
                </div>
              </div>

              <div class="column is-one-quarter">
                <div class="box">
                  <p class="title is-4 has-text-centered">
                    Attendees{" "}
                    {user.id == trip.creator ? (
                      <a
                        href={`${trip.id}/attendee`}
                        class="button is-light is-small"
                      >
                        +
                      </a>
                    ) : (
                      <></>
                    )}
                  </p>
                  <hr />
                  <div class="">
                    {trip.attendees?.map((attendee) => {
                      return (
                        <p class="title is-5" key={attendee.id}>
                          {attendee.user.first_name} {attendee.user.last_name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="column is-one-half">
                <div class="box">
                  <p class="title is-4 has-text-centered">Attractions</p>
                  <hr />
                  <div class="fixed-grid has-2-cols">
                    <div class="grid">
                      {trip.attractions?.map((attr) => {
                        return (
                          <div class="cell" key={attr.attraction.id}>
                            <div class="card">
                              <div class="card-image">
                                <figure class="image">
                                  <img src={attr.attraction.imageurl}></img>
                                </figure>
                              </div>
                              <div class="card-content">
                                <p class="title is-6">{attr.attraction.name}</p>
                                <p class="subtitle is-6">
                                  {attr.attraction.description}
                                </p>
                                <span class="tag is-light">
                                  {attr.attraction.category.name}
                                </span>
                              </div>
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
        <div class="section">
          <section class="hero has-background-light">
            <div class="hero-body">
              <p class="title">Page not found</p>
              <a href="/trips" class="button">
                Return to My Trips
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

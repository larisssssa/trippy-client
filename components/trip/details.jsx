export function TripDetail({ trip }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
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
          <div class="column box is-one-quarter">
            <p class="title is-4 has-text-centered">Details</p>
            <hr />
            <div class="content">
              <p class="title is-5">Destination:</p>
              <p class="subtitle is-6">
                {trip.destination}, {trip.country}
              </p>
            </div>
            <div class="content">
              <p class="title is-5">Departure:</p>
              <p class="subtitle is-6">{formatDate(trip.departure_date)}</p>
            </div>
            <div class="content">
              <p class="title is-5">Return:</p>
              <p class="subtitle is-6">{formatDate(trip.return_date)}</p>
            </div>
          </div>
          <div class="column box is-one-quarter">
            <p class="title is-4 has-text-centered">Attendees</p>
            <hr />
            <div class="">
              {trip.attendees.map((attendee) => {
                return (
                  <p class="title is-5" key={attendee.id}>
                    {attendee.user.first_name} {attendee.user.last_name}
                  </p>
                );
              })}
            </div>
          </div>
          <div class="column box is-one-half">
            <p class="title is-4 has-text-centered">Attractions</p>
          </div>
        </div>
      </div>
    </>
  );
}

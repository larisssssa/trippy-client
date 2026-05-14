export function TripDetail({ trip }) {
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
              <h2>Destination:</h2>
              <p>
                {trip.destination}, {trip.country}
              </p>
            </div>
          </div>
          <div class="column box is-one-quarter">
            <p class="title is-4 has-text-centered">Attendees</p>
          </div>
          <div class="column box is-one-half">
            <p class="title is-4 has-text-centered">Attractions</p>
          </div>
        </div>
      </div>
    </>
  );
}

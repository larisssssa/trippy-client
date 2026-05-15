export function TripCard({ trip, width = "is-one-quarter" }) {
  const date = new Date(trip.departure_date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div class={`column ${width}`}>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={trip.imageurl} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">{trip.name}</p>
          <p class="subtitle">{date}</p>
        </div>
        <div class="card-footer">
          <a href={`/trips/${trip.id}`} class="card-footer-item">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

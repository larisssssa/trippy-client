export function TripCard({ trip, width = "is-one-quarter" }) {
  const date = new Date(trip.departure_date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="cell">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={trip.imageurl} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{trip.name}</p>
          <p className="subtitle">{date}</p>
        </div>
        <div className="card-footer">
          <a href={`/trips/${trip.id}`} className="card-footer-item">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

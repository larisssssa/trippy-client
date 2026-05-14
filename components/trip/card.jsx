export function TripCard({ trip, width = "is-one-quarter" }) {
  const date = new Date(trip.date);

  return (
    <div class={`column ${width}`}>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={trip.imageurl} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">{trip.name}</p>
          <p class="subtitle">
            {date.toLocaleString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}

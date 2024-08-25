export default function FavoriteEmpty() {
  return (
    <section className = "favorites favorites--empty">
      <h1 className = "visually-hidden"> Favorites (empty) </h1>
      <div className="favorites_status-wrapper">
        <b className="favorites_status">Nothing yet saved.</b>
        <p className="favorites_ status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );
}

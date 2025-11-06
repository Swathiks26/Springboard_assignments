import { Link } from "react-router-dom";

export default function SpacecraftCard({ sc, planetName, onDestroy }) {
  // Get first image if pictureUrl is string or array
  const getImageUrl = (pictureUrl) => {
    if (!pictureUrl) return null;
    if (Array.isArray(pictureUrl)) return pictureUrl[0];
    if (typeof pictureUrl === "string") return pictureUrl;
    return null;
  };

  return (
    <div className="card">
      {getImageUrl(sc.pictureUrl) ? (
        <img
          src={getImageUrl(sc.pictureUrl)}
          alt={sc.name}
          className="card-img"
        />
      ) : (
        <div className="card-img-placeholder">No Image</div>
      )}
      <div className="card-content">
        <h3>{sc.name}</h3>
        <p>Capacity: {sc.capacity}</p>
        <p>Location: {planetName}</p>
        <p className="description">{sc.description}</p>
        <div className="card-buttons">
          <Link to={`/spacecrafts/${sc.id}`} className="btn btn-primary">
            View
          </Link>
          <button
            onClick={() => onDestroy(sc.id)}
            className="btn btn-secondary"
          >
            Destroy
          </button>
        </div>
      </div>
    </div>
  );
}

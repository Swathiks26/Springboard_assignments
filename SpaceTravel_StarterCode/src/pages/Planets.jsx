import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [planetsData, craftsData] = await Promise.all([
        SpaceTravelApi.getPlanets(),
        SpaceTravelApi.getSpacecrafts(),
      ]);

      setPlanets(Array.isArray(planetsData) ? planetsData : []);
      setCrafts(Array.isArray(craftsData) ? craftsData : []);
    } catch (err) {
      console.error(err);
      setPlanets([]);
      setCrafts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="page-container">
      <h2>Planets</h2>
      {planets.length === 0 ? (
        <p>No planets found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {planets.map((p) => (
            <div key={p.id} className="card">
              {p.pictureUrl ? (
                <img
                  src={
                    Array.isArray(p.pictureUrl) ? p.pictureUrl[0] : p.pictureUrl
                  }
                  alt={p.name}
                  className="card-img"
                />
              ) : (
                <div className="card-img-placeholder">No Image</div>
              )}
              <div className="card-content">
                <h3>{p.name}</h3>
                <p>Population: {p.currentPopulation}</p>

                {crafts.filter((c) => c.currentLocation === p.id).length > 0 ? (
                  <ul>
                    {crafts
                      .filter((c) => c.currentLocation === p.id)
                      .map((sc) => (
                        <li key={sc.id}>{sc.name}</li>
                      ))}
                  </ul>
                ) : (
                  <p>No spacecraft stationed here.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

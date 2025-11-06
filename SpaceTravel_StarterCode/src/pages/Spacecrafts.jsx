import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading";
import SpacecraftCard from "../components/SpacecraftCard";

export default function Spacecrafts() {
  const [crafts, setCrafts] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [craftsData, planetsData] = await Promise.all([
        SpaceTravelApi.getSpacecrafts(),
        SpaceTravelApi.getPlanets(),
      ]);
      setCrafts(Array.isArray(craftsData) ? craftsData : []);
      setPlanets(Array.isArray(planetsData) ? planetsData : []);
    } catch (err) {
      console.error(err);
      setCrafts([]);
      setPlanets([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const destroyCraft = async (id) => {
    if (confirm("Delete this spacecraft?")) {
      try {
        await SpaceTravelApi.destroySpacecraftById(id);
        fetchData();
      } catch (err) {
        console.error(err);
        alert("Failed to delete spacecraft");
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="page-container">
      <h2>Spacecraft Fleet</h2>
      <Link to="/spacecrafts/build" className="btn btn-primary">
        + Build New Spacecraft
      </Link>

      {crafts.length === 0 ? (
        <p>No spacecraft available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {crafts.map((sc) => {
            const planetName =
              planets.find((p) => p.id === sc.currentLocation)?.name ||
              "Unknown";
            return (
              <SpacecraftCard
                key={sc.id}
                sc={sc}
                planetName={planetName}
                onDestroy={destroyCraft}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../components/Loading";
import { ButtonPrimary, ButtonSecondary } from "../components/UI";

export default function SpacecraftDetails() {
  const { id } = useParams();
  const nav = useNavigate();

  const [craft, setCraft] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dest, setDest] = useState("");

  const fetchData = async () => {
    try {
      const [craftData, planetsData] = await Promise.all([
        SpaceTravelApi.getSpacecraftById(id),
        SpaceTravelApi.getPlanets(),
      ]);

      setCraft(craftData);
      setPlanets(Array.isArray(planetsData) ? planetsData : []);
    } catch (err) {
      console.error(err);
      setCraft(null);
      setPlanets([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const send = async () => {
    if (!dest) return alert("Select a planet first.");
    try {
      await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId: id,
        planetId: Number(dest),
      });
      await fetchData();
      alert("Mission launched ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  if (isLoading) return <Loading />;

  if (!craft) return <p>Spacecraft not found.</p>;

  // Only show planets that are not the current location
  const validDest = planets.filter((p) => p.id !== craft.currentLocation);
  const currentPlanetName =
    planets.find((p) => p.id === craft.currentLocation)?.name || "Unknown";

  return (
    <div className="page-container">
      <ButtonSecondary onClick={() => nav(-1)}>← Back</ButtonSecondary>

      <h1>{craft.name}</h1>
      <p>Capacity: {craft.capacity}</p>
      <p>Current Location: {currentPlanetName}</p>
      <p>{craft.description}</p>
      {craft.pictureUrl?.[0] && (
        <img
          src={craft.pictureUrl[0]}
          alt={craft.name}
          className="spacecraft-img"
        />
      )}

      <div className="space-y-2">
        <label>Send to Planet:</label>
        <select
          value={dest}
          onChange={(e) => setDest(e.target.value)}
          className="select"
        >
          <option value="">Select Destination</option>
          {validDest.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <ButtonPrimary onClick={send}>Launch Mission 🚀</ButtonPrimary>
      </div>
    </div>
  );
}

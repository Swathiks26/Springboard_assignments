import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import { ButtonPrimary, ButtonSecondary } from "../components/UI";

export default function BuildSpacecraft() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  });
  const [err, setErr] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Required.";
    if (!form.capacity || Number(form.capacity) <= 0)
      e.capacity = "Must be > 0.";
    if (!form.description) e.description = "Required.";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await SpaceTravelApi.buildSpacecraft({
        name: form.name,
        capacity: Number(form.capacity),
        description: form.description,
        pictureUrl: form.pictureUrl || undefined,
      });
      nav("/spacecrafts");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <ButtonSecondary onClick={() => nav(-1)}>← Back</ButtonSecondary>
      <h2>Build New Spacecraft</h2>

      <form onSubmit={submit} className="form">
        <div>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input"
          />
          {err.name && <p className="error">{err.name}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Capacity"
            value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            className="input"
          />
          {err.capacity && <p className="error">{err.capacity}</p>}
        </div>

        <div>
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="textarea"
          />
          {err.description && <p className="error">{err.description}</p>}
        </div>

        <div>
          <input
            placeholder="Picture URL (optional)"
            value={form.pictureUrl}
            onChange={(e) => setForm({ ...form, pictureUrl: e.target.value })}
            className="input"
          />
        </div>

        <ButtonPrimary type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Building..." : "Build"}
        </ButtonPrimary>
      </form>
    </div>
  );
}

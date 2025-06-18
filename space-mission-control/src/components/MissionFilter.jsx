import styles from "./MissionFilter.module.css";

function MissionFilter({ setFilter }) {
  const STATUSES = ["All", "Planned", "Active", "Completed"];
  return (
    <>
      {STATUSES.map((status, id) => (
        <button
          key={id}
          onClick={() => setFilter(status)}
          className={styles.button}
        >
          {status}
        </button>
      ))}
    </>
  );
}

export default MissionFilter;

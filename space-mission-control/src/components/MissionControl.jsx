import { use, useState } from "react";

import styles from "./MissionControl.module.css";

import MissionFilter from "./MissionFilter";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";

function MissionControl({ initialMissions }) {
  const INITIAL_FILTER = "All";
  const [missions, setMissions] = useState(initialMissions);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  function updateMissionStatus(id, newStatus) {
    setMissions((prevMission) =>
      prevMission.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );
  }

  const filteredMissions =
    filter === "All"
      ? missions
      : missions.filter((mission) => mission.status === filter);

  return (
    <div>
      <h1>Space Mission</h1>

      <div className={styles.filterContainer}>
        <MissionFilter setFilter={setFilter} />
      </div>

      {filteredMissions.map((mission) => {
        const { id, name, status, crew } = mission;
        return (
          <div key={id} className={styles.missionContainer}>
            <div>
              <MissionCard name={name} status={status} crew={crew} />
            </div>
            <div>
              <MissionAction
                missionId={id}
                onUpdateMissionStatus={updateMissionStatus}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MissionControl;

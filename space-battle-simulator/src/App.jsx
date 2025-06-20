import React, { useState } from "react";

import "./App.css";

//import React from "react";
import SpaceBattleSimulator from "./SpaceBattleSimulator";

function App() {
  return (
    <div>
      <SpaceBattleSimulator minDamage={0} maxDamage={50} />
    </div>
  );
}

export default App;

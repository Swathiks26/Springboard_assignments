import { useState } from "react";
import styles from "./SpacecraftBuilder.module.css";

import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const deleteItem = (id) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <div className={styles.itemForm}>
        <ItemForm onSubmit={addItem} />
      </div>
      <div>
        <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default SpacecraftBuilder;

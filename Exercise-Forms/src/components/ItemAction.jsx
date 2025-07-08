import styles from "./ItemAction.module.css";

function ItemAction({ itemId, onDeleteItem }) {
  return (
    <div>
      <button className={styles.button} onClick={() => onDeleteItem(itemId)}>
        Delete
      </button>
    </div>
  );
}

export default ItemAction;

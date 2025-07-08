import styles from "./ItemCard.module.css";

function ItemCard({ name, quantity, purpose }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Quantiy:{quantity}</p>
      <p>Purpose:{purpose}</p>
    </>
  );
}

export default ItemCard;

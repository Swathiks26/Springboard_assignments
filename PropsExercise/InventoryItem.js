function InventoryItem(
  {
    name,
    type,
    quantity = 0,
    price = 0,
  } /* TODO: Take the props. Set defaults to the quantity. */
) {
  const lowStockThreshold = 5;
  const valueThreshold = 500;

  const totalValue = price * quantity;
  return (
    <div>
      <h2>
        {name} ({type})
        {quantity < lowStockThreshold && (
          <Message>
            <p>
              <span></span>low stock {quantity} remained.
            </p>
          </Message>
        )}
        {totalValue > valueThreshold && (
          <Message>
            <p>
              <span>💰</span> High value - consider extra protection!
            </p>
          </Message>
        )}
      </h2>
    </div>
  );
}

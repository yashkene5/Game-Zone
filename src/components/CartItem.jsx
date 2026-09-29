function CartItem({
  item,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) {

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-info">

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>

        <div className="quantity">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;
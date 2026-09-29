import CartItem from "../components/CartItem";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section>

      <h1 className="page-title">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p>Add some games to your cart.</p>
        </div>

      ) : (

        <>

          <div className="cart-list">

            {cart.map((item) => (

              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />

            ))}

          </div>

          <div className="cart-total">

            <h2>Total: ₹{total}</h2>

            <button>
              Checkout
            </button>

          </div>

        </>

      )}

    </section>
  );
}

export default Cart;
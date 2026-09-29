import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("gameCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // useEffect saves cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("gameCart", JSON.stringify(cart));
  }, [cart]);

  // Add game to cart
  const addToCart = (game) => {
    const existingGame = cart.find((item) => item.id === game.id);

    if (existingGame) {
      setCart(
        cart.map((item) =>
          item.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...game, quantity: 1 }]);
    }
  };

  // Remove game
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/games"
            element={<Games addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<About />} />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
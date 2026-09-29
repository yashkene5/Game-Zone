import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="hero">

        <h1>Welcome to GameZone 🎮</h1>

        <p>
          Discover your favorite games at the best prices.
        </p>

        <Link to="/games">
          <button>Explore Games</button>
        </Link>

      </div>

      <div className="features">

        <div>
          <h3>🎮 Huge Collection</h3>
          <p>Find popular games from different categories.</p>
        </div>

        <div>
          <h3>💰 Best Prices</h3>
          <p>Get your favorite games at affordable prices.</p>
        </div>

        <div>
          <h3>⚡ Easy Shopping</h3>
          <p>Add games to your cart and manage your order.</p>
        </div>

      </div>

    </section>
  );
}

export default Home;
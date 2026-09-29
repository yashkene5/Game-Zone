import { useState } from "react";
import games from "../data/games";
import GameCard from "../components/GameCard";

function Games({ addToCart }) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(games.map((game) => game.category))
  ];

  // Search and category filtering
  const filteredGames = games.filter((game) => {

    const matchesSearch =
      game.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      game.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>

      <h1 className="page-title">
        🎮 Games Store
      </h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}

        </select>

      </div>

      <div className="games-grid">

        {filteredGames.length > 0 ? (

          filteredGames.map((game) => (

            <GameCard
              key={game.id}
              game={game}
              addToCart={addToCart}
            />

          ))

        ) : (

          <p>No games found.</p>

        )}

      </div>

    </section>
  );
}

export default Games;
function GameCard({ game, addToCart }) {

  return (
    <div className="game-card">

      <img
        src={game.image}
        alt={game.name}
      />

      <div className="game-info">

        <h3>{game.name}</h3>

        <p>Category: {game.category}</p>

        <h4>₹{game.price}</h4>

        <button
          onClick={() => addToCart(game)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default GameCard;
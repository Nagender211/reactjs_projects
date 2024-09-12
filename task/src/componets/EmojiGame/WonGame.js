import React from 'react';

const WonGame = ({ resetGame, resetAll }) => {
  return (
    <div>
      <h1>Congratulations! You won the game!</h1>
      <button onClick={resetGame}>Play Again</button>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
};

export default WonGame;

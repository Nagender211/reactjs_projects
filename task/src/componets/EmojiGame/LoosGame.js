import React from 'react';

const LoosGame = ({ resetGame, resetAll }) => {
  return (
    <div>
      <h1>Game Over! You clicked the same emoji.</h1>
      <button onClick={resetGame}>Play Again</button>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
};

export default LoosGame;

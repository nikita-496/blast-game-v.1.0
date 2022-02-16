const { mock } = require('../utilitiesStore');

const setStatusAdjacentTiles = (adjacentCoords) => {
  const gameField = mock.GAME_FIELD;
  let adjacentTiles = [];
  for (let i = 0; i < adjacentCoords.length; i++) {
    const currCoords = adjacentCoords[i];
    const currX = currCoords.x;
    const currY = currCoords.y;

    const currCeil = gameField.columns[currX - 1].ceils[currY - 1];
    const currTile = currCeil.tile;
    currTile.status = 'adjacent';
    adjacentTiles.push(currTile);
  }
  return adjacentTiles;
};

module.exports.setStatusAdjacentTiles = setStatusAdjacentTiles;

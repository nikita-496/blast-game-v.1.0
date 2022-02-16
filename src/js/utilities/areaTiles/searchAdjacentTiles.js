const { switchTile } = require('../statusTiles/switchTile');
const { updateListSimilarTiles } = require('./updateListSimilarTiles');

const searchAdjacentTiles = (tileList, index) => {
  while (index < tileList.length) {
    const updateStatusTiles = switchTile(tileList, index);
    tileList = updateListSimilarTiles(updateStatusTiles, index);
    index++;
  }
  return tileList;
};

module.exports.searchAdjacentTiles = searchAdjacentTiles;

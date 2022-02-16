const { globalValues } = require('../../../gameStore');
const { createListSimilarTiles } = require('../adjacentTile/createListSimilarTiles');
const { defineCoords } = require('../adjacentTile/defineCoords');
const { defineType } = require('../adjacentTile/defineType');
const { filterCoords } = require('../adjacentTile/filterCoords');
const { setStatusAdjacentTiles } = require('../statusTiles/setStatusAdjacentTiles');
const { excludeTestedTiles } = require('./excludeTestedTiles');

const updateListSimilarTiles = (list, indexCurrTile) => {
  let copyList = [...list];
  let active = copyList[indexCurrTile];

  const adjacentCoords = defineCoords(active.coords.x, active.coords.y, globalValues.CELL_SIZE);

  const withoutTestedTiles = excludeTestedTiles(adjacentCoords, copyList);

  const adjacentTiles = filterCoords(withoutTestedTiles);
  const filteredAdjacentCoords = setStatusAdjacentTiles(adjacentTiles);
  const sameTypeAdjacentTile = defineType(active, filteredAdjacentCoords);

  const currListValues = createListSimilarTiles(active, sameTypeAdjacentTile);
  let previousListValues = [...list].slice(0, indexCurrTile);
  const updatedList = [...previousListValues, ...currListValues];
  return updatedList;
};

module.exports.updateListSimilarTiles = updateListSimilarTiles;

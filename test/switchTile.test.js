const expect = require('chai').expect;
const { globalValues } = require('../src/gameStore');
const { defineCoords } = require('../src/js/utilities/adjacentTile/defineCoords');
const { defineType } = require('../src/js/utilities/adjacentTile/defineType');
const { filterCoords } = require('../src/js/utilities/adjacentTile/filterCoords');
const {
  setStatusAdjacentTiles,
} = require('../src/js/utilities/statusTiles/setStatusAdjacentTiles');
const { mock } = require('../src/js/utilities/utilitiesStore');

describe('switch the status of the active tile to the adjacent one', function () {
  const { switchTile } = require('../src/js/utilities/statusTiles/switchTile');
  const {
    createListSimilarTiles,
  } = require('../src/js/utilities/adjacentTile/createListSimilarTiles');
  const { setStatusClickedTile } = require('../src/js/utilities/statusTiles/setStatusClickedTile');

  const cellSize = globalValues.CELL_SIZE;
  const step = 1;

  const clickedTile = setStatusClickedTile(mock.GAME_FIELD, 1, 3);
  const adjacentCoords = defineCoords(clickedTile.coords.x, clickedTile.coords.y, cellSize);
  const adjacentTiles = filterCoords(adjacentCoords);
  const filteredAdjacentTiles = setStatusAdjacentTiles(adjacentTiles);
  const sameTypeTiles = defineType(clickedTile, filteredAdjacentTiles);

  const tileList = createListSimilarTiles(clickedTile, sameTypeTiles);

  it('should change tile status current active tile and next tile in the list', function () {
    expect(switchTile(tileList, step)).to.be.deep.equal([
      {
        type: 'Red',
        coords: { x: 1, y: 3 },
        status: 'tested',
      },
      {
        type: 'Red',
        coords: { x: 2, y: 3 },
        status: 'active',
      },
    ]);
  });
});

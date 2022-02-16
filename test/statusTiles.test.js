const { globalValues } = require('../src/gameStore');
const { filterCoords } = require('../src/js/utilities/adjacentTile/filterCoords');
const { mock } = require('../src/js/utilities/utilitiesStore');

const expect = require('chai').expect;

describe('set status tiles', function () {
  const { setStatusClickedTile } = require('../src/js/utilities/statusTiles/setStatusClickedTile');

  const gameField = mock.GAME_FIELD;

  it('should clicked tile equal active', function () {
    expect(setStatusClickedTile(gameField, 1, 3)).to.be.deep.equal({
      type: 'Red',
      coords: { x: 1, y: 3 },
      status: 'active',
    });
  });

  const { defineCoords } = require('../src/js/utilities/adjacentTile/defineCoords');
  const {
    setStatusAdjacentTiles,
  } = require('../src/js/utilities/statusTiles/setStatusAdjacentTiles');
  const clickedTile = setStatusClickedTile(gameField, 1, 3);
  const cellSize = globalValues.CELL_SIZE;
  const adjacentCoords = defineCoords(clickedTile.coords.x, clickedTile.coords.y, cellSize);
  const filteredAdjacentCoords = filterCoords(adjacentCoords);

  it('should set status "adjacent" for adjacent tiles ', function () {
    expect(setStatusAdjacentTiles(filteredAdjacentCoords)).to.be.deep.equal([
      {
        type: 'Blue',
        coords: { x: 1, y: 4 },
        status: 'adjacent',
      },
      {
        type: 'Red',
        coords: { x: 2, y: 3 },
        status: 'adjacent',
      },
      {
        type: 'Yellow',
        coords: { x: 1, y: 2 },
        status: 'adjacent',
      },
    ]);
  });
});

/*describe('switch the status of the active tile to the adjacent one', function () {
  const { switchTile } = require('../src/js/utilities/statusTiles/switchTile');
  const tileList = [
    { x: 1, y: 3, type: 'Red', status: 'active' },
    { x: 2, y: 3, type: 'Red', status: 'adjacent' },
  ];
  it('should change tile status current active tile and next tile in the list', function () {
    expect(switchTile(tileList, 1)).to.be.deep.equal([
      { x: 1, y: 3, type: 'Red', status: 'tested' },
      { x: 2, y: 3, type: 'Red', status: 'active' },
    ]);
  });
});*/

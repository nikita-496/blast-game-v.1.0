const expect = require('chai').expect;

const { modules } = require('../src/js/utilities/adjacentTile/importedModules');
const { mock } = require('../src/js/utilities/utilitiesStore');

const clickedTile = modules.setStatusClickedTile(mock.GAME_FIELD, 1, 3);
cellSize = modules.globalValues.CELL_SIZE;
const adjacentCoords = modules.defineCoords(clickedTile.coords.x, clickedTile.coords.y, cellSize);

describe('define coordinate adjacent tile', function () {
  it('should currectly report adjacent coordianates', function () {
    expect(adjacentCoords)
      .to.be.an('array')
      .that.to.deep.equal([
        { x: 1, y: 4 },
        { x: 2, y: 3 },
        { x: 1, y: 2 },
        { x: 0, y: 3 },
      ]);
  });

  it('should include adjacent coordinates within the game field', function () {
    expect(modules.filterCoords(adjacentCoords)).to.be.deep.equal([
      { x: 1, y: 4 },
      { x: 2, y: 3 },
      { x: 1, y: 2 },
    ]);
  });
});

describe('define same type tiles', function () {
  const { defineType } = require('../src/js/utilities/adjacentTile/defineType');

  const adjacentTiles = modules.filterCoords(adjacentCoords);
  const filteredAdjacentTiles = modules.setStatusAdjacentTiles(adjacentTiles);

  it('should contain an area of ​​tiles of the same type', function () {
    expect(defineType(clickedTile, filteredAdjacentTiles)).to.be.deep.equal([
      {
        type: 'Red',
        coords: { x: 2, y: 3 },
        status: 'adjacent',
      },
    ]);
  });

  const sameTypeTiles = defineType(clickedTile, filteredAdjacentTiles);
  it('should length list of same type tiles equal number of same tile', function () {
    expect(modules.createListSimilarTiles(clickedTile, sameTypeTiles)).to.be.deep.equal([
      {
        type: 'Red',
        coords: { x: 1, y: 3 },
        status: 'active',
      },
      {
        type: 'Red',
        coords: { x: 2, y: 3 },
        status: 'adjacent',
      },
    ]);
  });
});

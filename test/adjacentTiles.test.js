const expect = require('chai').expect;

const { defineCoords } = require('../src/js/utilities/adjacentTile/defineCoords');
const { filterCoords } = require('../src/js/utilities/adjacentTile/filterCoords');

const activeTile = {
  x: 4,
  y: 1,
  type: 'Green',
  status: 'active',
};
cellSize = 1;

describe('define coordinate adjacent tile', function () {
  it('should currectly report adjacent coordianates', function () {
    expect(defineCoords(activeTile.x, activeTile.y, cellSize))
      .to.be.an('array')
      .that.to.deep.equal([
        { x: 4, y: 2 },
        { x: 5, y: 1 },
        { x: 4, y: 0 },
        { x: 3, y: 1 },
      ]);
  });

  const adjacentCoords = defineCoords(activeTile.x, activeTile.y, cellSize);

  it('should include adjacent coordinates within the game field', function () {
    expect(filterCoords(adjacentCoords)).to.be.deep.equal([
      { x: 4, y: 2 },
      { x: 5, y: 1 },
      { x: 3, y: 1 },
    ]);
  });
});

describe('define same type tiles', function () {
  const { defineType } = require('../src/js/utilities/adjacentTile/defineType');

  const adjacentCoords = defineCoords(activeTile.x, activeTile.y, cellSize);
  const adjacentTiles = filterCoords(adjacentCoords);

  it('should contain an area of ​​tiles of the same type', function () {
    adjacentTiles.forEach((adjacentTile, index) => {
      if (index === 2) {
        adjacentTile.type = 'Yellow';
        adjacentTile.status = 'adjacent';
        return adjacentTile;
      }
      adjacentTile.type = 'Green';
      adjacentTile.status = 'adjacent';
      return adjacentTile;
    });

    expect(defineType(activeTile, adjacentTiles)).to.be.deep.equal([
      { x: 4, y: 2, type: 'Green', status: 'adjacent' },
      { x: 5, y: 1, type: 'Green', status: 'adjacent' },
    ]);
  });
  const {
    createListSimilarTiles,
  } = require('../src/js/utilities/adjacentTile/createListSimilarTiles');
  it('should length list of same type tiles equal number of same tile', function () {
    expect(
      createListSimilarTiles(activeTile, defineType(activeTile, adjacentTiles))
    ).to.be.deep.equal([
      { x: 4, y: 1, type: 'Green', status: 'active' },
      { x: 4, y: 2, type: 'Green', status: 'adjacent' },
      { x: 5, y: 1, type: 'Green', status: 'adjacent' },
    ]);
  });
});

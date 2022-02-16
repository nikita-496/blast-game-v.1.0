const expect = require('chai').expect;
const { modules } = require('../src/js/utilities/areaTiles/importedModules');
const { mock } = require('../src/js/utilities/utilitiesStore');

describe('area of ​​formation consisting of adjacent similar tiles', function () {
  const cellSize = modules.globalValues.CELL_SIZE;
  const curr = [
    { type: 'Red', coords: { x: 1, y: 3 }, status: 'tested' },
    { type: 'Red', coords: { x: 2, y: 3 }, status: 'active' },
  ];
  const adjacent = [
    { x: 2, y: 4 },
    { x: 3, y: 3 },
    { x: 2, y: 2 },
    { x: 1, y: 3 },
  ];

  it('should exclude coordinates of the tested tile', function () {
    expect(modules.excludeTestedTiles(adjacent, curr))
      .to.be.an('array')
      .that.deep.equal([
        { x: 2, y: 4 },
        { x: 3, y: 3 },
        { x: 2, y: 2 },
      ]);
  });

  const clickedTile = modules.setStatusClickedTile(mock.GAME_FIELD, 1, 3);
  const adjacentCoords = modules.defineCoords(clickedTile.coords.x, clickedTile.coords.y, cellSize);
  const adjacentTiles = modules.filterCoords(adjacentCoords);
  const filteredAdjacentTiles = modules.setStatusAdjacentTiles(adjacentTiles);
  const sameTypeTiles = modules.defineType(clickedTile, filteredAdjacentTiles);

  const currActiveIndex = 1;
  const tileList = modules.createListSimilarTiles(clickedTile, sameTypeTiles);

  it('should check adjacent similar tile next in list after clicked tile', function () {
    const currTilesList = modules.switchTile(tileList, currActiveIndex);
    expect(modules.updateListSimilarTiles(currTilesList, currActiveIndex))
      .to.be.an('array')
      .that.deep.equal([
        { type: 'Red', coords: { x: 1, y: 3 }, status: 'tested' },
        { type: 'Red', coords: { x: 2, y: 3 }, status: 'active' },
        { type: 'Red', coords: { x: 2, y: 4 }, status: 'adjacent' },
        { type: 'Red', coords: { x: 3, y: 3 }, status: 'adjacent' },
        { type: 'Red', coords: { x: 2, y: 2 }, status: 'adjacent' },
      ]);
  });
  /*const { searchAdjacentTiles } = require('../src/js/utilities/areaTiles/searchAdjacentTiles');
  it('should each adjacent similar tile check its adjacent tiles to provide an updated list', function () {
    expect(searchAdjacentTiles(tileList, currActiveIndex))
      .to.be.an('array')
      .that.deep.equal([
        { type: 'Red', coords: { x: 1, y: 3 }, status: 'tested' },
        { type: 'Red', coords: { x: 2, y: 3 }, status: 'tested' },
        { type: 'Red', coords: { x: 2, y: 4 }, status: 'active' },
        { type: 'Red', coords: { x: 3, y: 3 }, status: 'adjacent' },
        { type: 'Red', coords: { x: 2, y: 2 }, status: 'adjacent' },
      ]);
  });*/
});

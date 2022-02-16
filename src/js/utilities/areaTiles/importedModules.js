const { globalValues } = require('../../../gameStore');
const { createListSimilarTiles } = require('../adjacentTile/createListSimilarTiles');
const { defineCoords } = require('../adjacentTile/defineCoords');
const { defineType } = require('../adjacentTile/defineType');
const { filterCoords } = require('../adjacentTile/filterCoords');
const { setStatusAdjacentTiles } = require('../statusTiles/setStatusAdjacentTiles');
const { setStatusClickedTile } = require('../statusTiles/setStatusClickedTile');
const { switchTile } = require('../statusTiles/switchTile');
const { excludeTestedTiles } = require('./excludeTestedTiles');
const { updateListSimilarTiles } = require('./updateListSimilarTiles');

const modules = {};

modules.globalValues = globalValues;
modules.createListSimilarTiles = createListSimilarTiles;
modules.defineCoords = defineCoords;
modules.defineType = defineType;
modules.filterCoords = filterCoords;
modules.setStatusAdjacentTiles = setStatusAdjacentTiles;
modules.setStatusClickedTile = setStatusClickedTile;
modules.switchTile = switchTile;
modules.excludeTestedTiles = excludeTestedTiles;
modules.updateListSimilarTiles = updateListSimilarTiles;

module.exports.modules = modules;

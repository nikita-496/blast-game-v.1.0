const { globalValues } = require('../../../gameStore');
const { setStatusAdjacentTiles } = require('../statusTiles/setStatusAdjacentTiles');
const { setStatusClickedTile } = require('../statusTiles/setStatusClickedTile');
const { createListSimilarTiles } = require('./createListSimilarTiles');
const { defineCoords } = require('./defineCoords');
const { filterCoords } = require('./filterCoords');

const modules = {};

modules.globalValues = globalValues;
modules.defineCoords = defineCoords;
modules.filterCoords = filterCoords;
modules.setStatusAdjacentTiles = setStatusAdjacentTiles;
modules.setStatusClickedTile = setStatusClickedTile;
modules.createListSimilarTiles = createListSimilarTiles;

module.exports.modules = modules;

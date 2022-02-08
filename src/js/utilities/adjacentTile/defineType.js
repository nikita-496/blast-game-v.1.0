const defineType = (activeTileType, adjacentTiles) =>
  adjacentTiles.filter((tile) => tile.type === activeTileType.type);

module.exports.defineType = defineType;

const defineCurrActiveTileCoords = (list, index) => {
  const currActiveTileCoords = {};
  currActiveTileCoords.x = list[index].x;
  currActiveTileCoords.y = list[index].y;
  return currActiveTileCoords;
};

module.exports.defineCurrActiveTileCoords = defineCurrActiveTileCoords;

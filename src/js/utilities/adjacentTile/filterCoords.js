const filterCoords = (adjacentTilesCoords) => {
  const rangeTileCoords = [1, 2, 3, 4, 5, 6];
  const filteredСoordinates = adjacentTilesCoords.filter(
    (currTileCoords) =>
      rangeTileCoords.includes(currTileCoords.x) && rangeTileCoords.includes(currTileCoords.y)
  );
  return filteredСoordinates;
};

module.exports.filterCoords = filterCoords;

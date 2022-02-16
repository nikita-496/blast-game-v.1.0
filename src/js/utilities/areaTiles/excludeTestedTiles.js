const excludeTestedTiles = (adjacentCoords, tileList) => {
  let strAdjacentCoords = [];
  for (let coords of adjacentCoords) {
    strAdjacentCoords.push(JSON.stringify(coords));
  }
  for (let tile of tileList) {
    if (tile.status === 'tested') {
      const excludeCoords = JSON.stringify(tile.coords);
      strAdjacentCoords.splice(strAdjacentCoords.indexOf(excludeCoords), 1);
    }
  }
  const result = [];
  for (let coords of strAdjacentCoords) {
    result.push(JSON.parse(coords));
  }
  return result;
};
module.exports.excludeTestedTiles = excludeTestedTiles;

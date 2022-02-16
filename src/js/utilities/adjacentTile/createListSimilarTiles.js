const createListSimilarTiles = (currList, adjacentTiles) => {
  let list = [];
  if (!Array.isArray(currList)) {
    list = [currList, ...adjacentTiles];
  } else if (adjacentTiles.length === 0) {
    list = currList;
  } else {
    for (let tile of adjacentTiles) {
      list.push(tile);
    }
  }

  return list;
};

module.exports.createListSimilarTiles = createListSimilarTiles;

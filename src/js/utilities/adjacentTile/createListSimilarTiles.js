const createListSimilarTiles = (currList, adjacentTiles) => {
  let list = [currList, ...adjacentTiles];
  return list;
};

module.exports.createListSimilarTiles = createListSimilarTiles;

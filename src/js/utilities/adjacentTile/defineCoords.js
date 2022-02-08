const defineCoords = (activeTileX, activeTileY, cellSize) => {
  //Искать прилегающие тайлы в области креста
  const numCrossCell = 4;
  //Поиск осуществлять по часовой стрелке от вершины креста
  let i = 1;
  let adjacentTilesCoords = [];

  while (i <= numCrossCell) {
    i === 1
      ? adjacentTilesCoords.push({
          x: activeTileX,
          y: activeTileY + cellSize,
        })
      : i === 2
      ? adjacentTilesCoords.push({
          x: activeTileX + cellSize,
          y: activeTileY,
        })
      : i === 3
      ? adjacentTilesCoords.push({
          x: activeTileX,
          y: activeTileY - cellSize,
        })
      : adjacentTilesCoords.push({
          x: activeTileX - cellSize,
          y: activeTileY,
        });
    i++;
  }
  return adjacentTilesCoords;
};

module.exports.defineCoords = defineCoords;

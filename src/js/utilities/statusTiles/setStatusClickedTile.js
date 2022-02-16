const setStatusClickedTile = (gameField, coordXClickedTile, coordsYClickedTile) => {
  let clickedTile = {};
  for (let column of gameField.columns) {
    if (column.serialNumberColumn === coordXClickedTile) {
      for (let ceil of column.ceils) {
        if (ceil.serialNumberCeil === coordsYClickedTile) {
          ceil.tile.status = 'active';
          clickedTile = ceil.tile;
          break;
        }
      }
    }
  }
  return clickedTile;
};
module.exports.setStatusClickedTile = setStatusClickedTile;

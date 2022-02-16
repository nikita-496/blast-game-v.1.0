const switchTile = (tileList, step) => {
  for (let i = 0; i <= step; i++) {
    i === step ? (tileList[i].status = 'active') : (tileList[i].status = 'tested');
  }
  return tileList;
};

module.exports.switchTile = switchTile;

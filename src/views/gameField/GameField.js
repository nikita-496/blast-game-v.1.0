import gameElements from '../../js/imagesStore';

class GameField extends cc.Layer {
  constructor() {
    super();
    this.init();
  }

  init() {
    const size = cc.director.getWinSize();
    const sprite = cc.Sprite.create(gameElements.GAME_FIELD);
    sprite.setPosition(size.width / 2, size.height / 2.5);
    sprite.setScale(0.3);
    this.addChild(sprite, 0);
  }
}

export default GameField;

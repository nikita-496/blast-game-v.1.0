import GameField from './gameField/GameField';

class MainScene extends cc.Scene {
  constructor() {
    super();
    this.init();
  }
  init() {
    const gameField = new GameField();
    this.addChild(gameField, 2);
  }
}

export default MainScene;

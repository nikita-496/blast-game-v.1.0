import MainScene from '../views/MainScene';
import gameElements from './imagesStore';

window.onload = () => {
  cc.game.onStart = function () {
    //load resources
    cc.LoaderScene.preload(
      [gameElements.PRELOAD],
      () => cc.director.runScene(new MainScene()),
      this
    );
  };
  cc.game.run('gameCanvas');
};

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', LukeAttack.Boot);
game.state.add('Preloader', LukeAttack.Preload);
game.state.add('MainMenu', LukeAttack.MainMenu);
game.state.add('Game', LukeAttack.Game);

game.state.start('Boot');

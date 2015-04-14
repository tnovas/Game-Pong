var app = {};

var gameSettings = new Settings();

var keysPlayers = [
	gameSettings.Player1.GetKeywords().up,
	gameSettings.Player1.GetKeywords().down,
	gameSettings.Player2.GetKeywords().up,
	gameSettings.Player2.GetKeywords().down
]

var canvas = document.getElementById('canvas');

var canvasContext = canvas.getContext('2d');

var canvasSize = gameSettings.Canvas.GetSize();

canvas.width = canvasSize.width;

canvas.height = canvasSize.height;

app.ball = new Ball(gameSettings.Ball.GetSpeed(),
					gameSettings.Ball.GetPosition(),
					gameSettings.Ball.GetSize());

app.player1 = new Player('Player1',
						 gameSettings.Player1.GetSize(),
						 gameSettings.Player1.GetPosition(),
						 gameSettings.Player1.GetKeywords(),
						 gameSettings.Player1.GetMoveSpeed());

app.player2 = new Player('Player2',
						 gameSettings.Player2.GetSize(),
						 gameSettings.Player2.GetPosition(),
						 gameSettings.Player2.GetKeywords(),
						 gameSettings.Player2.GetMoveSpeed());

app.field = new Field(canvasSize,
					  gameSettings.Field.GetPosition());

app.canvas = new Canvas(canvasContext,
						canvasSize);

app.game = new Game(app.player1,
					app.player2,
					app.ball,
					app.field,
					app.canvas);

app.game.Start();
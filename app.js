var app = {};

var keysPlayers = [
	settings.player1.keywords.up,
	settings.player1.keywords.down,
	settings.player2.keywords.up,
	settings.player2.keywords.down
]

var canvas = document.getElementById('canvas');

var canvasContext = canvas.getContext('2d');

canvas.width = settings.canvas.size.width;

canvas.height = settings.canvas.size.height;

app.ball = new Ball(settings.ball.speed, settings.ball.position, settings.ball.size);

app.player1 = new Player('Player1', settings.player1.size, settings.player1.image, settings.player1.position, settings.player1.keywords, settings.player1.moveSpeed);

app.player2 = new Player('Player2', settings.player2.size, settings.player2.image, settings.player2.position, settings.player2.keywords, settings.player2.moveSpeed);

app.field = new Field(settings.canvas.size, settings.field.size);

app.canvas = new Canvas(canvasContext, settings.canvas.size);

app.game = new Game(app.player1, app.player2, app.ball, app.field, app.canvas);

app.game.Start();

window.addEventListener('keydown', function(e){
	var key = e.keyCode;
	if (keysPlayers.indexOf(key) !== -1) {
		app.game.MovePlayer(key);	
	}
});
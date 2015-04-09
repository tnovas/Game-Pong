Game = function(player1, player2, ball, field, canvas) {

	//Contructor	
	var canvas = canvas;
	var ball = ball;
	var field = field;
	var players = [
		player1, 
		player2
	];
	var playerCollision;
	var wallTop;
	var wallBot;

	//Private Methods
	function drawGame() {
		canvas.Clean();
		canvas.Draw(ball.GetPosition(), ball.GetSize());
		players.forEach(function(player){
			canvas.Draw(player.GetPosition(), player.GetSize());
		});
		canvas.Draw(field.GetPosition(), field.GetSize());
	};

	function checkCollision() {
		var ballPosition = ball.GetPositionView();
		players.forEach(function(player){
			if (playerCollision == player) {
				return;
			}

			var playerPosition = player.GetPositionView();
			var collisionY = false;
			var collisionX = false;

			ballPosition.y.forEach(function(ball){
				if (playerPosition.y.indexOf(ball) !== -1) {
					collisionY = true;
				}
			});

			ballPosition.x.forEach(function(ball){
				if (playerPosition.x.indexOf(ball) !== -1) {
					collisionX = true;
				}
			});

			if (collisionX && collisionY) {
				playerCollision = player;
				wallTop = false;
				wallBot = false;
				ball.PlayerImpact();
			}
		});		

		if (ballPosition.y[0] <= field.GetPosition().x && !wallTop) {
			wallTop = true;
			wallBot = false;
			ball.WallImpact();
		}
		if (ballPosition.y[ballPosition.y.length-1] >= field.GetPosition().y && !wallBot) {
			wallTop = false;
			wallBot = true;
			ball.WallImpact();
		}
	};

	//Public Methods
	this.Start = function() {
		setInterval(function(){
			drawGame();	
			checkCollision();
		}, 100);
	};

	this.MovePlayer = function(keyPress) {
		players.forEach(function(player){
			player.Move(keyPress);
		})
	};
}
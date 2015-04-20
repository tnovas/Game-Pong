Game = function(player1, player2, ball, field, canvas) {

	//Contructor	
	var canvas = canvas;
	var ball = ball;
	var field = field;
	var players = [
		player1, 
		player2
	];

	var playerCollision,
		wallTop,
		wallBot,
		keys = [];

	//Events
	window.addEventListener('keydown', function(e){
		if (keysPlayers.indexOf(e.keyCode) !== -1 &&
			keys.indexOf(e.keyCode) === -1) {
			keys.push(e.keyCode);
		}
	});

	window.addEventListener('keyup', function(e){
		if (keysPlayers.indexOf(e.keyCode) !== -1) {
			var index = keys.indexOf(e.keyCode);
			keys.splice(index, 1);
		}
	});

	//Public Methods
	this.Start = function() {
		loop();
	};

	//Private Methods
	function loop(){
		drawGame();	
		checkCollision();
		checkKeys();
		timer = window.requestAnimationFrame(loop);
	};

	function checkKeys() {
		if (keys.length > 0) {
			keys.forEach(function(key){
				players.forEach(function(player){
					player.Move(key);
				})
			})
		}
	};

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
		var fieldPosition = field.GetPositionView();

		players.forEach(function(player){
			checkCollisionPlayerBall(player, ballPosition)
			checkCollisionPlayerWall(player);
		});

		checkCollisionBallWall(ballPosition);
	};

	function checkCollisionPlayerBall(player, ballPosition){
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
	}

	function checkCollisionPlayerWall(player){
		var playerPosition = player.GetPositionView();
		if (playerPosition.y[0] <= field.GetPosition().x) {
			player.Stop(1);
		} else if (playerPosition.y[playerPosition.y.length-1] >= field.GetPosition().y) {
			player.Stop(2);
		}
	}

	function checkCollisionBallWall(ballPosition){
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

		if (ballPosition.x[0] <= field.GetPosition().x) {
			players[1].SetPoint();
			win();
		}

		if (ballPosition.x[ballPosition.x.length-1] >= field.GetSize().width) {
			players[0].SetPoint();
			win();
		}
	}

	function win(){
		document.getElementById('player1').innerHTML = players[0].GetPoints();
		document.getElementById('player2').innerHTML = players[1].GetPoints();
		reset();
	}

	function reset(){
		ball = new Ball(settings.ball.speed, settings.ball.position, settings.ball.size);
		wallTop = false;
		wallBot = false;
		playerCollision = {};
	}
}
Ball = function(speed, position, size){
	
	//Contructor	
	var speed = speed;
	var position = position;
	var size = size;
	var positionView = {
		x: [],
		y: []
	};
	var positionTarget = {};
	var directionLeft = false;
	var directionUp = false;
	var directionY;
	var directions = [{x: 3, y: 2}, {x:3, y:4}, {x:4, y:2}];
	var intervalUpdate;

	//Init
	(function (){
		move(false);
		directionY = directions[2];
		createInterval();
	})();

	//Private Methods
	function makePositionView(){
		positionView.y = [];
		positionView.x = [];
		for (var i = 0; i <= size.height; i++) {
			positionView.y.push(position.y + i);
		};

		for (var i = 0; i <= size.width; i++) {
			positionView.x.push(position.x + i);
		};
	};

	function move(impact){
		if (impact) {
			directionLeft = !directionLeft;
			directionUp = Math.floor((Math.random() * 1)) == 0 ? true : false;
			var index = Math.floor((Math.random() * 3));
			directionY = directions[index];
		} else {
			directionUp = !directionUp;
		}
	};

	function updatePosition(){
		if (directionLeft) {
			position.x -= directionY.x;	
		} else {
			position.x += directionY.x;
		}
		
		if (directionUp) {
			position.y -= directionY.y;
		} else {
			position.y += directionY.y;
		}
	}

	function createInterval(){
		clearInterval(intervalUpdate);
		intervalUpdate = setInterval(function() { 
			updatePosition()
		}, speed.normal);
	}

	//Public Methods
	this.GetPosition = function(){
		return position;
	};

	this.GetSize = function() {
		return size;
	};

	this.GetSpeed = function(){
		return speed;
	};

	this.GetPositionView = function(){
		makePositionView();
		return positionView;
	};

	this.PlayerImpact = function(){
		if (speed.normal > speed.maxSpeed) {
			speed.normal -= speed.increaseSpeed;
			createInterval();
		}

		move(true);
	};

	this.WallImpact = function(){
		move(false);
	};
}
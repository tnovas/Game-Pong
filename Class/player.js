Player = function(name, size, position, direction, moveSpeed) {

	//Contructor
	var name = name;
	var points = 0;
	var moveSpeed = moveSpeed;
	var direction = direction;
	var racket = {
		size: size,
		position: position,
		positionView: {
			x: [],
			y: []
		}
	}; 
	var stopMove;

	//Public Methods
	this.SetPoint = function() {
		points++;
	};

	this.GetPoints = function() {
		return points;
	};

	this.GetPositionView = function(){
		makeRacketPositionView();
		return racket.positionView;
	};

	this.GetPosition = function() {
		return racket.position;
	};

	this.GetSize = function() {
		return racket.size;
	};

	this.Move = function(key) {
		if (key === direction.up && stopMove !== 1) {
			racket.position.y -= moveSpeed;
		} else if (key === direction.down && stopMove !== 2) {
			racket.position.y += moveSpeed;
		}
		stopMove = 0;
	};

	this.Stop = function(stop){
		stopMove = stop;
	}

	//Private Methods
	function makeRacketPositionView() {
		racket.positionView.y = [];
		racket.positionView.x = [];
		for (var i = 0; i <= racket.size.height; i++) {
			racket.positionView.y.push(racket.position.y + i);
		};

		for (var i = 0; i <= racket.size.width; i++) {
			racket.positionView.x.push(racket.position.x + i);
		};
	};
}
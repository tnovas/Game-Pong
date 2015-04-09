Player = function(name, size, image, position, direction, moveSpeed){

	//Contructor
	var name = name;
	var points = 0;
	var moveSpeed = moveSpeed;
	var direction = direction;
	var racket = {
		size: size,
		image: image,
		position: position,
		positionView: {
			x: [],
			y: []
		}
	}; 

	//Private Methods
	function makeRacketPositionView(){
		racket.positionView.y = [];
		racket.positionView.x = [];
		for (var i = 0; i <= racket.size.height; i++) {
			racket.positionView.y.push(racket.position.y + i);
		};

		for (var i = 0; i <= racket.size.width; i++) {
			racket.positionView.x.push(racket.position.x + i);
		};
	};

	//Public Methods
	this.SetPoints = function() {
		points++;
	};

	this.GetImage = function(){
		return racket.image;
	};

	this.GetPositionView = function(){
		makeRacketPositionView();
		return racket.positionView;
	};

	this.GetPosition = function(){
		return racket.position;
	};

	this.GetSize = function() {
		return racket.size;
	};

	this.Move = function(key){
		if (key === direction.up){
			racket.position.y -= moveSpeed;
		} else if (key === direction.down) {
			racket.position.y += moveSpeed;
		}
	};
}
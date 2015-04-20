Field = function(positionCanvas, position){

	//Contructor
	var size = { height: position.height, width: positionCanvas.width };
	var position = {x: 0, y: positionCanvas.height}; 
	var positionView = {
		xTop: 0,
		xBot: []
	};

	//Public Methods
	this.GetPosition = function(){
		return position;
	};

	this.GetSize = function() {
		return size;
	};

	this.GetPositionView = function(){
		makeRacketPositionView();
		return positionView;
	};

	//Private Methods
	function makeRacketPositionView() {
		positionView.xBot = [];

		for (var i = 0; i <= size.height; i++) {
			positionView.xBot.push(i);
		};
	};
}
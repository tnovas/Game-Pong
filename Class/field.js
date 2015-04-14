Field = function(positionCanvas, position){

	//Contructor
	var size = { height: position.height, width: positionCanvas.width };
	var position = {x: 0, y: positionCanvas.height}; 

	//Public Methods
	this.GetPosition = function(){
		return position;
	};

	this.GetSize = function() {
		return size;
	};
}
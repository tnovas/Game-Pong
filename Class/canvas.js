Canvas = function(context, size){

	//Contructor
	var context = context;
	var size = size;

	//Public Methods
	this.Draw = function(position, size) {
		context.fillRect(position.x, position.y, size.width, size.height);
	};

	this.Clean = function() {
		context.clearRect(0, 0, size.width, size.height);
	};
}
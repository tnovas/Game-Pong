Canvas = function(context, size){
	var context = context;
	var size = size;

	this.Draw = function(position, size) {
		context.fillRect(position.x, position.y, size.width, size.height);
	};

	this.Clean = function() {
		context.clearRect(0, 0, size.width, size.height);
	};
}
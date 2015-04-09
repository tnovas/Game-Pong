Field = function(position, size){
	var size = { height: size.height, width: position.width };
	var position = {x: 0, y: position.height}; 

	this.GetPosition = function(){
		return position;
	};

	this.GetSize = function() {
		return size;
	};
}
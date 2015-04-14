Settings = function(){

	this.Ball = {
		GetPosition: function () {
			return createObject(settings.ball.position);
		},
		GetSize: function() {
			return createObject(settings.ball.size);
		},
		GetSpeed: function() {
			return createObject(settings.ball.speed);
		}
	},

	this.Player1 = {
		GetPosition: function () {
			return createObject(settings.player1.position);
		},
		GetSize: function() {
			return createObject(settings.player1.size);
		},
		GetKeywords: function(){
			return createObject(settings.player1.keywords);
		},
		GetMoveSpeed: function(){
			return settings.player1.moveSpeed;
		}
	},

	this.Player2 = {
		GetPosition: function () {
			return createObject(settings.player2.position);
		},
		GetSize: function() {
			return createObject(settings.player2.size);
		},
		GetKeywords: function(){
			return createObject(settings.player2.keywords);
		},
		GetMoveSpeed: function(){
			return settings.player2.moveSpeed;
		}
	},

	this.Canvas = {
		GetSize: function() {
			return createObject(settings.canvas.size);
		}
	},

	this.Field = {
		GetPosition: function () {
			return createObject(settings.field.size);
		}
	}

	function createObject(obj){
		return Object.create(obj);
	}
}
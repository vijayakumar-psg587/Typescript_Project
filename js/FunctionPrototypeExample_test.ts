//decalring a constructor function to assing a new property
function todoConstructor(){

	//declares a  new var todo as an empty array
	this.todo = [];
	this.message = 'String';
}

todoConstructor.prototype.gettodo =function(){
	return this.message;
}

var obj = new todoConstructor();
console.log(obj.gettodo());
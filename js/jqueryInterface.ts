interface jQuery{
	(elem:any):jQueryElement;
	fn:any;
	version?: number;

};

interface jQueryElement{
	data(value:String):any;
	data(attr:String, value: String):jQueryElement
};

//<> this is the conversion symbol to indicate the ts complier
//to convert it into our interface type
var $ = <jQuery> function(elem){
	
}
$.version = 1.10;

var container = $("#container");
//With this you can create custom property rather than access the existing ones
var temp =container.data('todo');
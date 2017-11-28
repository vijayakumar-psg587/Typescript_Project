interface sample{
	myvar : String,
	//Questions marks allows us to declare attributes which arent mandatory
	myvar1? : any [],
	myvar2? : number
	//to define methods just give the name and the params
	samplefunction? (elem:HTMLElement):any
}

let interfacevar:sample = {myvar :'Stroing', myvar1 :[{id: 123, custOrdId: 234}], myvar2: 45,

samplefunction : function (elem){
	console.log(elem.tagName);
}
};
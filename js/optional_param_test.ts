let divElement = document.getElementById('container');

let dofunc = function doSomething(id:number=0, name:string, ojJson:Object){

	if(ojJson instanceof Object){
		console.log('test');
	}
};

dofunc(1, 'u',{name: 'Dd', obb: 123});
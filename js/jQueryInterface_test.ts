interface jQuery{
	(elem:(string |any)): jQueryElement;
	version?:number;
}


interface jQueryElement{
	data(elem:any):any;
	data(attr:string, value:any):jQueryElement;
}

var $jq = <jQuery> function(elem){

};

var divContainer = $jq("#container");
var secondDiv:HTMLElement = document.createElement('div');
secondDiv.innerHTML ='ets';
divContainer.appendChild(secondDiv);
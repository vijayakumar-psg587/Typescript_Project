let divContainer = document.getElementById('container');

let sampleVar:(any[] | Array<Object>) = [
{
	id: 1,
	message:'Vale of first index',
	componetDisplay:true
},
{
	id: 1,
	message:'Vale of first index',
	componetDisplay:false	

}
];


var indexArray:Object;
var bodyEleemnt:NodeListOf<Element> = document.getElementsByTagName("body");


divContainer.addEventListener('click',function(event: Event){
	var uiElemnt:Element = document.createElement('ol');
	for(indexArray of sampleVar){
		var liElemnt: Element = document.createElement("li");
		liElemnt.setAttribute("value",'index_'+`${indexArray.id}`);	
		liElemnt.innerHTML = 'index_'+`${indexArray.id}`;
		uiElemnt.appendChild(liElemnt);
	}
	divContainer.appendChild(uiElemnt);
	bodyEleemnt[0].appendChild(divContainer);

} );

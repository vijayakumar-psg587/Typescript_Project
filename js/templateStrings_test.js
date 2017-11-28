var divContainer = document.getElementById('container');
var sampleVar = [
    {
        id: 1,
        message: 'Vale of first index',
        componetDisplay: true
    },
    {
        id: 1,
        message: 'Vale of first index',
        componetDisplay: false
    }
];
var indexArray;
var bodyEleemnt = document.getElementsByTagName("body");
divContainer.addEventListener('click', function (event) {
    var uiElemnt = document.createElement('ol');
    for (var _i = 0, sampleVar_1 = sampleVar; _i < sampleVar_1.length; _i++) {
        indexArray = sampleVar_1[_i];
        var liElemnt = document.createElement("li");
        liElemnt.setAttribute("value", 'index_' + ("" + indexArray.id));
        liElemnt.innerHTML = 'index_' + ("" + indexArray.id);
        uiElemnt.appendChild(liElemnt);
    }
    divContainer.appendChild(uiElemnt);
    bodyEleemnt[0].appendChild(divContainer);
});

var divElement = document.getElementById('container');
var dofunc = function doSomething(id, name, ojJson) {
    if (id === void 0) { id = 0; }
    if (ojJson instanceof Object) {
        console.log('test');
    }
};
dofunc(1, 'u', { name: 'Dd', obb: 123 });

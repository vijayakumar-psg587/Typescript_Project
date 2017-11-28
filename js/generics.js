var Map = (function () {
    function Map(key, value) {
        this.mapValues = new Array();
        this.mapValues = new Array();
        this.mapValues.push({ mapKey: this.key, mapValues: this.value });
    }
    ;
    Map.prototype.addMapValue = function (key, value) {
        if (this.mapValues.length === 0) {
            this.mapValues = new Array();
            this.mapValues.push({ mapKey: key, mapValues: value });
        }
        else {
            if (getFromkey(key))
                ;
        }
    };
    Map.prototype.getFromKey = function (key) {
        if (this.mapValues.length === 0) {
            return 'Empty object to search for';
        }
        for (var _i = 0, _a = this.mapValues; _i < _a.length; _i++) {
            var iter = _a[_i];
            if (iter.mapKey === key) {
                return iter.mapValues;
            }
            else {
                return 'No value found';
            }
        }
    };
    return Map;
}());
var a1 = new Map('12', 'Value12');

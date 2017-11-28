var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StateEnum;
(function (StateEnum) {
    StateEnum[StateEnum["New"] = 1] = "New";
    StateEnum[StateEnum["Active"] = 2] = "Active";
    StateEnum[StateEnum["Inactive"] = 3] = "Inactive";
    StateEnum[StateEnum["Completed"] = 4] = "Completed";
    StateEnum[StateEnum["Cancelled"] = 5] = "Cancelled";
    StateEnum[StateEnum["Due"] = 6] = "Due";
})(StateEnum || (StateEnum = {}));
var TodoService = (function () {
    function TodoService(todo) {
        this.todo = todo;
    }
    TodoService.prototype.getNextIterValue = function () {
        return TodoService.iteratingValue += 1;
    };
    Object.defineProperty(TodoService.prototype, "TodoStateComplete", {
        get: function () {
            return StateEnum.Completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoService.prototype, "SampleIntState", {
        set: function (stateVar) {
            this.todo.state = stateVar;
        },
        enumerable: true,
        configurable: true
    });
    return TodoService;
}());
TodoService.iteratingValue = 0;
var TodoStateChanger = (function (_super) {
    __extends(TodoStateChanger, _super);
    function TodoStateChanger() {
        var _this = this;
        //either this
        var todo = { id: 12, name: 'df', state: StateEnum.Active };
        //or
        _this = _super.call(this, todo) || this;
        return _this;
    }
    return TodoStateChanger;
}(TodoService));
var s = new TodoStateChanger();

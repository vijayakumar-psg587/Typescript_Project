interface sampleInt{

	id:number;
	message?:string;
	name:string;
	state:StateEnum;
}

enum StateEnum{
	New =1,
	Active,
	Inactive,
	Completed,
	Cancelled,
	Due
}


class TodoService{

	static iteratingValue:number = 0;

	getNextIterValue():number{
		return TodoService.iteratingValue+=1;
	}

	constructor(private todo: sampleInt){

	}

	get TodoStateComplete(){
		return StateEnum.Completed;
	}

	set SampleIntState(stateVar:StateEnum){
		this.todo.state = stateVar;
	}

}

class TodoStateChanger extends TodoService{

	constructor(){
		//either this
		var todo = {id:12, name:'df', state:StateEnum.Active};
		//or

		super(todo);
	}
}

var s = new TodoStateChanger();

interface Mapvalues{
	mapKey:(string | number);
	mapValues:(Object | any[]);
	getFromKey?(key:(string | number)):(Object | any[]);
}

class Map<K, V> {
	private mapValues:Mapvalues [] = new Array<Mapvalues>();;
	public key;
	public value;
	constructor(key:(string | number),
		value:(string | number | Object| any[]| Object[])
		){

		this.mapValues = new Array<Mapvalues>();
		
		this.mapValues.push({mapKey:this.key, mapValues:this.value});
	}

	addMapValue(key:(string | number),
		value:(string | number | Object| any[]| Object[])){
		if(this.mapValues.length === 0){
			this.mapValues = new Array();
			this.mapValues.push({mapKey:key, mapValues:value});
		}else {
			if(getFromkey(key))
		}
	}

	getFromKey(key:(string | number)){
		if(this.mapValues.length === 0){
			return 'Empty object to search for';
		}
		for(let iter of this.mapValues){
			if(iter.mapKey === key){
				return iter.mapValues;
			}else{
				return 'No value found';
			}
		}
	}
}

let a1 = new Map<string, string>('12','Value12');
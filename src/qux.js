import Baa from './baa.js';

export default class Qux extends Baa {
	
	constructor(name){
		super(name);		
	}
	
	quxMethod(){
		return 'quxMethod';
	}
	
	overridableMethod() {
		return 'qux';
	}
}
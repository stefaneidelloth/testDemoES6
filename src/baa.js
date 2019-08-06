import Foo from './foo.js';

export default class Baa extends Foo {
	
	constructor(name){
		super(name);	
	}
	
	baaMethod(){
		return 'baaMethod';
	}
	
	overridableMethod() {
		return 'baa';
	}
}
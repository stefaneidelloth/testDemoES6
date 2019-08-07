define([
	'src/baa',
	'src/qux'
],function(
	baaModule,
	quxModule
){

	describe('Qux', function(){

		var sut;		

		beforeEach(function(done){	
		
			baaModule.default = createBaaMock();

			var Qux = quxModule.default;		
			sut = new Qux('qux');

			done();	
			

		});

		it('quxMethod', function(){			
			expect(sut.quxMethod()).toEqual('quxMethod');
		});	

		it('baaMethod', function(){			
			expect(sut.baaMethod()).toEqual('baaMockedMethod');
		});	

		it('overridableMethod', function(){			
			expect(sut.overridableMethod()).toEqual('qux');
		});		

		function createBaaMock(){
			var BaaMock = function (name) {
				this.name = name;
			};
			BaaMock.prototype.baaMethod = function () {
				return 'baaMockedMethod';
			}

			var moduleMock = {
				default: BaaMock
			}
			return moduleMock;
		}		

	});	

});	
	
		
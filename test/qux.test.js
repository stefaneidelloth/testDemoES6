define([
	'squire'	
], function (
	Squire
) {	

	
	describe('Qux', function(){
		
		var sut;		
		
		beforeEach(function(done){	

			var injector = new Squire();			
			injector.mock('src/baa', createBaaMock());
					
			injector.require([
				'src/qux'
			], function(
				quxModule
			){				
				
				var Qux = quxModule.default;		
				sut = new Qux('qux');
				
				done();	
			}, function(error){
				console.log('+++++');
				console.log(error);
			});
			
						
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
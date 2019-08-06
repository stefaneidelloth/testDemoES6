var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /test\.js$/.test(file);
});

require.config({	
	baseUrl : '/base',
	paths : {
		'squire': 'node_modules/squirejs/src/Squire',
		'd3': 'bower_components/d3/d3.min',
		'jquery' : 'bower_components/jquery/dist/jquery.min'		
	}
});

require(tests, window.__karma__.start);
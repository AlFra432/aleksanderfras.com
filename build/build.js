({
	paths: {
		requireLib: '../node_modules/requirejs/require',
		jquery: '../node_modules/jquery/dist/jquery',
		velocity: '../node_modules/velocity-animate/velocity',
		afnimation: '../js/afnimation',	
	},
	shim: {
		jquery : {
			deps: [
				"requireLib"
			]
		},
		velocity : {
			deps: [
				"jquery"
			]
		},
		afnimation: {
			deps: [
				"jquery",
				"velocity"
			]
		}
	},
	include: 'requireLib',
	optimize: "uglify2",
	preserveLicenseComments: false,
	name: "main",
	out : "all.min.js"
})
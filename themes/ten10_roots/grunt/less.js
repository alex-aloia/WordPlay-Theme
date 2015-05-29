module.exports = {
	dev: {
		files: {
			'assets/css/main.css': [
				'assets/less/main.less'
			]
		},
		options: {
			compress: false,
			// LESS source map
			// To enable, set sourceMap to true and update sourceMapRootpath based on your install
			sourceMap: true,
			sourceMapFilename: 'assets/css/main.css.map',
			sourceMapRootpath: '/content/themes/ten10_roots/'
		}
	},
	build: {
		files: {
			'assets/css/main.min.css': [
				'assets/less/main.less'
			]
		},
		options: {
			compress: true
		}
	}
}
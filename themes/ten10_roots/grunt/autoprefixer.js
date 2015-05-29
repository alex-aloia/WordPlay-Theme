module.exports = {

			dev: {
				options: {
          browsers: ['android 4'],
					map: {
						prev: 'assets/css/'
					}
				},
				src: 'assets/css/main.css'
			},
			build: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
        },
				src: 'assets/css/main.min.css'
			}

}

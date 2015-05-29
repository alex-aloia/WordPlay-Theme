module.exports = {
  less: {

    options: {
      livereload: true,
      hostname: '*'
    },

    files: [
      'assets/less/*.less',
      'assets/less/**/*.less'
    ],

    tasks: ['less:dev', 'autoprefixer:dev']
  },
  js: {
    files: [
      'grunt <%= src.bootstrap %>',
      '<%= jshint.all %>'
    ],
    tasks: ['jshint', 'concat']
  },
  livereload: {
    // Browser live reloading
    // https://github.comcd /gruntjs/grunt-contrib-watch#live-reloading
    options: {
      livereload: true,
      hostname: '*'
    },
    files: [
      'assets/less/layouts/*.less',
      'assets/less/_global.less',
      //'assets/less/**/*.less',
      'assets/js/scripts.js',
      'assets/js/plugins/*.js',
//			'templates/*.php',
      '*.php'
    ]
  }
}



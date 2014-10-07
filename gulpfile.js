var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var watch = require('gulp-watch');

gulp.task('less', function () {
  gulp.src('assets/less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:true, debug:true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});


gulp.task('browser-sync', function () {
   var files = [
      'assets/less/**/*.less',
      'assets/js/**/*.js'
   ];

   browserSync.init(files, {
      proxy: "dev.t3inf.dev"
   });
});


// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
    // Watch PHP files
    gulp.watch('./**/*.php', reload);
    // Watch less files
    gulp.watch('assets/less/**/*.less', ['less']);
});

// Default task to be run with `gulp`
gulp.task('default', ['less', 'watch', 'browser-sync']);
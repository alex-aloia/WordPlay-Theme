var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var watch = require('gulp-watch');

gulp.task('less_dev', function () {
  gulp.src('assets/less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:true, debug:true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('less', function () {
  gulp.src('assets/less/main.less')
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:false, debug:false}))
    .pipe(rename('main.min.css'))
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



gulp.task('scripts', function() {
    gulp.src(['assets/js/_*.js', 'assets/js/plugins/*.js', 'assets/vendor/bootstrap/js/*.js' ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
});


gulp.task('scripts_dev', function() {
    gulp.src(['assets/js/_*.js', 'assets/js/plugins/*.js', 'assets/vendor/bootstrap/js/*.js' ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/js'))
});


/*
* TASK LIST
*/

// Dev
gulp.task('watch', ['browser-sync'], function() {
    // Watch PHP files
    gulp.watch('./**/*.php', reload);
    // Watch less files
    gulp.watch('assets/less/**/*.less', ['less']);
});

// Default task to be run with `gulp`
gulp.task('dev', ['less', 'scripts_dev', 'watch', 'browser-sync']);

// Build
gulp.task('default', ['less','scripts']);

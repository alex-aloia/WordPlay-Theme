var theme_name = 'roots';

var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('less_dev', function () {
  gulp.src('src/less/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:true, debug:true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});

gulp.task('less', function () {
  gulp.src('src/less/main.less')
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:false, debug:false}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});

gulp.task('browser-sync', function () {
   var files = [
      'src/less/**/*.less',
      'src/js/**/*.js'
   ];

   browserSync.init(files, {
      proxy: "dev.t3inf.com"
   });
});



gulp.task('scripts', function() {
    gulp.src(['src/js/_*.js', 'src/js/plugins/*.js', 'vendor/bootstrap/js/*.js' ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('scripts_dev', function() {
    gulp.src(['src/js/_*.js', 'src/js/plugins/*.js', 'vendor/bootstrap/js/*.js' ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


/*
* TASK LIST
*/

// Dev
gulp.task('watch', ['browser-sync'], function() {
    // Watch PHP files
    gulp.watch('./themes' + theme_name + '/**/*.php', reload);
    // Watch less files
    gulp.watch('src/less/**/*.less', ['less']);
});

// Default task to be run with `gulp`
gulp.task('dev', ['less', 'scripts_dev', 'watch', 'browser-sync']);

// Build
gulp.task('default', ['less','scripts']);

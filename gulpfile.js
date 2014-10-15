var theme_name = 'roots';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('browser-sync', function() {
    browserSync({
        proxy: "dev.t3inf.com"
    });
});

/*
 * Less / CSS
 */
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



/*
* javascript
 */

var js_head = [
    'vendor/bower/greensock/src/uncompressed/TweenMax.js',
    'vendor/bower/svg.js/dist/svg.js'
];


var js_foot = [
    'vendor/bower/bootstrap/js/transition.js',
    'vendor/bower/bootstrap/js/alert.js',
    'vendor/bower/bootstrap/js/button.js',
    'vendor/bower/bootstrap/js/carousel.js',
    'vendor/bower/bootstrap/js/collapse.js',
    'vendor/bower/bootstrap/js/dropdown.js',
    'vendor/bower/bootstrap/js/modal.js',
    'vendor/bower/bootstrap/js/tooltip.js',
    'vendor/bower/bootstrap/js/popover.js',
    'vendor/bower/bootstrap/js/scrollspy.js',
    'vendor/bower/bootstrap/js/tab.js',
    'vendor/bower/bootstrap/js/affix.js',
    'src/js/_*.js'
];

gulp.task('js-head', function() {
    gulp.src(js_head)
        .pipe(concat('js-head.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('dev_js-head', function() {
    gulp.src(js_head)
        .pipe(sourcemaps.init())
        .pipe(concat('js-head.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('dev_js-foot', function() {
    gulp.src(js_foot)
        .pipe(sourcemaps.init())
        .pipe(concat('js-foot.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('jshint', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('bower', function() {
    return gulp.src(mainBowerFiles(/* options */), { base: 'vendor/bower' })
        .pipe(concat('main.min.js'))
        .pipe(jshint())
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
    gulp.watch('src/less/**/*.less', ['less_dev', browserSync.reload]);
    // Watch scripts
    gulp.watch('src/js/**/*.js', ['dev_js-foot', browserSync.reload]);
});

// Default task to be run with `gulp`
gulp.task('dev', ['less_dev', 'dev_js-head', 'dev_js-foot', 'jshint', 'watch', 'browser-sync']);

// Build
gulp.task('default', ['less','scripts']);

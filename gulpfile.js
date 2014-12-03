var theme_name = 'roots',
   assets = './themes/' + theme_name + '/assets/';

var gulp = require('gulp'),
//var mainBowerFiles = require('main-bower-files'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    copy = require('gulp-copy'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    svgSprite = require("gulp-svg-sprites"),

    reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "dev.t3inf.com",
        ghostMode: true
    });
});


/*
 * svg min & sprite
 */
var sprite_config = {
    templates: {
        css: require("fs").readFileSync("./src/less/sprite-template.less", "utf-8")
    },
    common: "sprite",
    cssFile: "src/less/svg-sprite.css",
    svgPath: "../img/%f",
    pngPath: "../img/%f",
    svg: {
        sprite: "spritesheet.svg"
    },
    preview: {
        sprite: "/sprite-index.html"
    }
};

gulp.task('svg-sprite', function () {
    return gulp.src('src/svg/sprites/*.svg')
        .pipe(plumber())
        .pipe(svgSprite(sprite_config))
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/img'));
});


var symbol_config = {
    mode: "symbols",
    common: "symbol",
    svg: {
        symbols: "inline-symbols.svg.php"
    },
    preview: {
        symbols: "/symbol-index.html"
    }
};

gulp.task('svg-symbol', function () {
    return gulp.src('./src/svg/symbols/*.svg')
//        .pipe(plumber())
        .pipe(svgSprite(symbol_config))
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/img'));
});



/*
 * Less / CSS
 */

var path = require('path');

/*
gulp.task('less_dev', function () {
    gulp.src('./src/less/main.less')
        .pipe(less({
//            generateSourceMap: true, // default true
            sourceMaps: true,
            paths: [ path.join(__dirname) ]
        }))
        .pipe(gulp.dest(assets + '/css'));
});
*/

gulp.task('less_dev', function () {
    gulp.src('src/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
//        .pipe(minifyCSS({keepBreaks: true, debug: true}))
        .pipe(sourcemaps.write({includeContent: true}))
//        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});

/*
gulp.task('less', function () {
    gulp.src('src/less/main.less')
        .pipe(less({
            generateSourceMap: false,
            paths: [ path.join(__dirname) ]
        }))
        .pipe(minifyCSS({keepBreaks: false, debug: false}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});
 */


/*
 * javascript
 */

var js_foot = [
    'vendor/bower/greensock/src/uncompressed/TweenMax.js',
    'vendor/bower/d3/d3.js',
//  'vendor/bower/jquery-contentsize/jquery.contentsize.js',
    'vendor/bower/jlayout/lib/jquery.sizes.js',
    'vendor/bower/jlayout/lib/jlayout.flow.js',
    'vendor/bower/jlayout/lib/jquery.jlayout.js',
    'vendor/bower/bootstrap/js/transition.js',
    'vendor/bower/bootstrap/js/alert.js',
    'vendor/bower/bootstrap/js/button.js',
//  'vendor/bower/bootstrap/js/carousel.js',
    'vendor/bower/bootstrap/js/collapse.js',
    'vendor/bower/bootstrap/js/dropdown.js',
    'vendor/bower/bootstrap/js/modal.js',
    'vendor/bower/bootstrap/js/tooltip.js',
    'vendor/bower/bootstrap/js/popover.js',
//  'vendor/bower/bootstrap/js/scrollspy.js',
//  'vendor/bower/bootstrap/js/tab.js',
//  'vendor/bower/bootstrap/js/affix.js',
    'src/js/_*.js'
];


gulp.task('js-foot', function () {
    gulp.src(js_head)
        .pipe(concat('js-foot.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('dev_js-foot', function () {
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





  
/*
 * TASK LIST
 */

// Dev
gulp.task('watch', ['browser-sync'], function () {
    // Watch PHP files
    gulp.watch('themes/' + theme_name + '/**/*.php', browserSync.reload);
    // Watch less files
    gulp.watch('src/less/**/*.less', ['less_dev', browserSync.reload]);
    // Watch scripts
    gulp.watch('src/js/**/*.js', ['dev_js-foot', browserSync.reload]);
});

// Default task to be run with `gulp`
gulp.task('dev', ['less_dev', 'dev_js-foot', 'jshint', 'watch', 'browser-sync']);


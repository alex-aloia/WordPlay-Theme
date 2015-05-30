var theme_name = 'custom';

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
    'src/js/plugins/*.js',
    'src/js/common/*.js',
    'src/js/main.js'
];

var gulp = require('gulp'),
//mainBowerFiles = require('main-bower-files'), TODO: setup auto bower
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    path = require('path'),
    less = require('gulp-less-sourcemap'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    copy = require("gulp-copy"),
    autoprefixer = require('gulp-autoprefixer'),
    svgmin = require('gulp-svgmin'),
    gulpif = require('gulp-if'),
    reload = browserSync.reload;
    cheerio = require('gulp-cheerio');


/**********************************************************
 *********************** TASKS ****************************
 **********************************************************/

/*
 * Browser-Sync
 */
gulp.task('browser-sync', function () {
    browserSync({
        proxy: "theme", // Must change to FQDN if used -- use dnsmasq to create 'fake domains'
        ghostMode: false,
        open: false
    });
});


/*
 * Copy jQuery fallback
 */
gulp.task('jq-fallback', function () {
    return gulp.src('./vendor/bower/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/js'));
});


/*
 * Copy fonts
 */
gulp.task('copy-fonts', function () {
    return gulp.src('./src/fonts/**/*.{ttf,woff,eot,otf,svg}')
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/fonts/'));
});


/*
 * Copy src images
 */
gulp.task('copy-imgs', function () {
    return gulp.src('./src/img/**/*.{jpg,png}')
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/img'));
});


/*
 *  SVG
 */

gulp.task('svg_min', function () {
    return gulp.src('./src/svg/unprocessed/*.svg')
        .pipe(svgmin({
            plugins: [
                {prettyPrint: true},
                {removeDoctype: true},
                {removeXMLProcInst: true},
                {removeComments: true},
                {removeMetadata: true},
                {removeEditorsNSData: false},
                {cleanupAttrs: true},
                {convertStyleToAttrs: false},
                {removeRasterImages: false},
                {cleanupNumericValues: false},
                {cleanupListOfValues: false},
                {convertColors: false},
                {removeUnknownsAndDefaults: false},
                {removeNonInheritableGroupAttrs: true},
                {removeUselessStrokeAndFill: false},
                {removeViewBox: false},
                {cleanupEnableBackground: true},
                {removeHiddenElems: true},
                {removeEmptyText: false},
                {convertShapeToPath: true},
                {moveElemsAttrsToGroup: true},
                {moveGroupAttrsToElems: false},
                {collapseGroups: false},
                {convertPathData: false},
                {convertTransform: true},
                {removeEmptyAttrs: true},
                {removeEmptyContainers: true},
                {mergePaths: false},
                {cleanupIDs: false},
                {removeUnusedNS: true},
                {transformsWithOnePath: false},
                {sortAttrs: true},
                {removeTitle: true},
                {removeDesc: true}
            ],
            js2svg: {
                pretty: true
            }
        }))

        .pipe(cheerio({
            run: function ($, file) {


                // Elements on which we want to convert ids to classes...
                var shapesAndText = 'g,path,rect,circle,ellipse,line,polyline,polygon,altGlyph,textPath,text,tref,tspan';

                // ...but don't touch any in defs/clipPath/masks tags
                var excludeContainers = 'defs,clipPath,mask';

                function inExcludedContainer(index, node) {
                    return $(node).parents(excludeContainers).length;
                }

                function convertIdToClass(index, node) {
                    var id = $(node).attr('id');
                    if (id) {
                        $(node).addClass(id);
                        $(node).removeAttr('id');
                    }
                }

                $('svg').find(shapesAndText).not(inExcludedContainer).each(convertIdToClass);

            },

            parserOptions: {
                xmlMode: true
            }

        }))
        .pipe(gulp.dest('./src/svg/processed'));
});


// convert ids to classes
gulp.task('id-to-class', function () {
    return gulp
        .src(['src/svg/processed/*.svg'])
        .pipe(cheerio({
            run: function ($, file) {


                // Elements on which we want to convert ids to classes...
                var shapesAndText = 'g,path,rect,circle,ellipse,line,polyline,polygon,altGlyph,textPath,text,tref,tspan';

                // ...but don't touch any in defs/clipPath/masks tags
                var excludeContainers = 'defs,clipPath,mask';

                function inExcludedContainer(index, node) {
                    return $(node).parents(excludeContainers).length;
                }

                function convertIdToClass(index, node) {
                    var id = $(node).attr('id');
                    if (id) {
                        $(node).addClass(id);
                        $(node).removeAttr('id');
                    }
                }

                $('svg').find(shapesAndText).not(inExcludedContainer).each(convertIdToClass);

            },

            parserOptions: {
                xmlMode: true
            }

        }))
        .pipe(gulp.dest('src/svg/processed/'));
});


gulp.task('copy-svgs', function () {
    return gulp.src('./src/svg/processed/*.{svg,php}')
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/svg/'));
});

/*
 * Less / CSS
 */


gulp.task('less-dev', function () {
    gulp.src('src/less/_main.less')
        .pipe(less({
            sourceMap: {
                sourceMapRootpath: '/src/less' // Optional absolute or relative path to your LESS files
            }
        }))
        //.pipe(autoprefixer())
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});


gulp.task('less', function () {
    gulp.src('src/less/_main.less')
        .pipe(less({
            generateSourceMap: false,
            paths: [path.join(__dirname)]
        }))
        .pipe(autoprefixer())
        .pipe(minifyCSS({keepBreaks: false, debug: false}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./themes/' + theme_name + '/assets/css'));
});


/*
 * javascript
 */


gulp.task('js', function () {
    gulp.src(js_foot)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('js-dev', function () {
    gulp.src(js_foot)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});


gulp.task('jshint', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('bower', function () {
    return gulp.src(mainBowerFiles(/* options */), {base: 'vendor/bower'})
        .pipe(concat('main.min.js'))
        .pipe(jshint())
        .pipe(gulp.dest('themes/' + theme_name + '/assets/js'))
});

/*
 * TASK LIST
 */

// Dev
gulp.task('watch', ['browser-sync'], function () {
    // watch PHP files
    gulp.watch('themes/' + theme_name + '/**/*.php', browserSync.reload);
    // watch less files
    gulp.watch('src/less/**/*.less', ['less-dev', browserSync.reload]);
    // watch scripts
    gulp.watch('src/js/**/*.js', ['js-dev', browserSync.reload]);
    // watch svg files
    gulp.watch('src/svg/unprocessed/*.svg', ['svg-min', browserSync.reload]);
    // watch img files
    gulp.watch('src/img/**/*', ['copy-imgs', browserSync.reload]);
});

// Default task to be run with `gulp`
gulp.task('dev-full', ['copy-fonts', 'copy-imgs', 'svg-min', 'copy-svgs', 'less-dev', 'js-dev', 'jshint', 'watch', 'browser-sync']);
gulp.task('dev-main', ['less-dev', 'js-dev', 'watch', 'browser-sync']);
gulp.task('default', ['copy-fonts', 'copy-imgs', 'copy-svgs', 'less', 'js', 'jq-fallback']);


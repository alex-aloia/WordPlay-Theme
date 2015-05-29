var gulp = require('gulp');


    var less = require('gulp-less');
    var path = require('path');

    gulp.task('less', function () {
        gulp.src('./assets/less/layouts/pages/**/*.less')
            .pipe(less({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            }))
            .pipe(gulp.dest('./main.css'));
    });



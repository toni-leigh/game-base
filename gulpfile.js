var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),

    bundleJs = function() {
        gulp.src('components/**/*.js')
            .pipe(concat('javascript.js'))
            .pipe(gulp.dest('./'));
    },

    scssToCss = function() {
      gulp.src('components/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
    };

gulp.task('bundleJs', bundleJs);
gulp.task('styles', scssToCss);
gulp.task('build', ['bundleJs', 'styles']);

gulp.task('watch', function () {
    gulp.watch([
        'gulpfile.js',
        './components/**/*.js', 
        './components/**/*.scss'
    ], [
        'bundleJs', 
        'styles'
    ]);
});

gulp.task('default', ['build', 'watch']);


var gulp = require('gulp'),
uglify = require('gulp-uglify'),
minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
});

gulp.task('default',['scripts','styles']);

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var inlineSource = require('gulp-inline-source');


gulp.task('scripts', function() {
    var stream = gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
    return stream;
});

gulp.task('styles', function() {
    var stream = gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
    return stream;
});

//gulp.task('inlineSource', function() {
//    var stream = gulp.src('./*.html')
//        .pipe(inlineSource())
//        .pipe(rename({
//            suffix: ".inline"
//        }))
//        .pipe(gulp.dest('build'));
//    return stream;
//});

gulp.task('compact', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    var stream = gulp.src('./*.html')
        .pipe(inlineSource())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('default',['scripts','styles','compact']);



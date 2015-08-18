var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var inlineSource = require('gulp-inline-source');
var imgop = require('gulp-image-optimization');


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

gulp.task('images', function() {
    gulp.src(['img/*.png','img/*.jpg'])
        .pipe(imgop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/img'));
    gulp.src(['views/images/*.png','views/images/*.jpg'])
        .pipe(imgop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/views/images'));
});

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

gulp.task('default',['scripts','styles','compact','images']);



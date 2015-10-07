var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var inlineSource = require('gulp-inline-source');
var imgop = require('gulp-image-optimization');
var jshint = require('gulp-jshint');


gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/views/js'));
});

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
    gulp.src('views/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/views/css'));
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
    gulp.src('./*.html')
        .pipe(inlineSource())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('build'));
    gulp.src('./views/pizza.html')
        .pipe(inlineSource())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('build/views'));
});

gulp.task('lint', function() {
    return gulp.src('views/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default',['scripts','styles','compact','lint']);



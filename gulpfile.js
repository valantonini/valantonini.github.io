var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


gulp.task('sass', function () {

    del('./css/*.css');

    gulp.src('./scss/site.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});


gulp.task('minify-css',['sass'], function () {

    return gulp.src('./css/site.css')
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});


gulp.task('default', ['minify-css']);
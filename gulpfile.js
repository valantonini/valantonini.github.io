var gulp = require('gulp');
var bundle = require('gulp-bundle-assets');
var exec = require('child_process').exec;
var cb = require('cb');
var del = require('del');

gulp.task('clean', function () {
    return del('./public/*');
});

gulp.task('bundle', ['clean'],function () {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./public'));
});

gulp.task('build', ['bundle'], function () {
    exec('jekyll build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default', ['build']);

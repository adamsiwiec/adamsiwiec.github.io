var gulp = require('gulp');
var del = require('del');
var min = require('gulp-cssmin');


gulp.task('del', function() {
    return del(['dist']);
});
gulp.task('default', ['del'], function() {


    gulp.src([ './node_modules/jquery/dist/jquery.min.js', './src/css/main.css', './src/js/anijs-min.js', './src/js/scrollreveal.min.js'])
    .pipe(gulp.dest('dist'));

    gulp.src(['./node_modules/bootstrap/dist/**/*' ])
    .pipe(gulp.dest('dist/boot'));

    gulp.src(['./src/img/*.*'])
    .pipe(gulp.dest('dist/img'));

    gulp.src(['./node_modules/font-awesome/**'])
    .pipe(gulp.dest('dist/font-awesome'));




});

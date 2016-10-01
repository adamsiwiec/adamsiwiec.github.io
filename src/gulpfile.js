var gulp = require('gulp');


gulp.task('default', function() {
    gulp.src(['./node_modules/font-awesome/*'])
    .pipe(gulp.dest('dist'));

});

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

gulp.task('default', ['less', 'browserify-watch'], function() {
    livereload.listen(35731);

    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/**/*.js', ['jshint']);
});

gulp.task('build', ['less', 'browserify-nowatch']);

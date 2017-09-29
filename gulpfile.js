var gulp = require('gulp')
var plumber = require('gulp-plumber')
var babel = require('gulp-babel')

gulp.task('build', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
})
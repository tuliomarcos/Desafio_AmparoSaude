const gulp = require('gulp')
const minify = require('gulp-minify')

gulp.task('js', function() {
  gulp
    .src('./src/app.js')
    .pipe(minify())
    .pipe(gulp.dest('./build/'))
})

gulp.task('js-watch', function() {
	gulp.watch('./src/*.js', ['js'])
})
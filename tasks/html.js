const gulp = require('gulp')
const minify = require('gulp-htmlmin')

gulp.task('html', function() {
  gulp
    .src('./src/index.html')
    .pipe(minify({collapseWhitespace: true}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('html-watch', function() {
	gulp.watch('./src/*.html', ['html'])
})
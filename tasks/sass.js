const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function() {
  return gulp
    .src('./src/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('sass-watch', function() {
	gulp.watch('./src/*.scss', ['sass'])
})
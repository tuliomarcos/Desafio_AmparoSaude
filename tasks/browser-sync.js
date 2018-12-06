const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  browserSync.create()

  browserSync.init({
    server: {
      baseDir: './build',
    },
    notify: false,
    open: true,
    files: ['./build/*']
  })
}

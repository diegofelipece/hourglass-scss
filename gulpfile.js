const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  app: {
    sass: './scss/**/*.scss',
    css: './dist'
  },
  demo: {
    sass: './demo/scss/**/*.scss',
    css: './demo/css'
  }
}

gulp.task('sass', function () {
  return gulp.src(paths.app.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.app.css));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.app.sass, ['sass']);
});

gulp.task('demo', function () {
  return gulp.src(paths.demo.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.demo.css));
});

gulp.task('demo:watch', function () {
  gulp.watch(paths.demo.sass, ['demo']);
});

gulp.task('dev', ['sass', 'sass:watch', 'demo:watch']);

gulp.task('default', ['sass', 'sass:watch']);

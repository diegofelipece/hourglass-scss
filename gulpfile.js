const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

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
    .pipe(gulp.dest(paths.app.css))
    .pipe(browserSync.stream());
});

gulp.task('demo', function () {
  return gulp.src(paths.demo.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.demo.css))
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./demo/"
      }
  });
  gulp.watch([paths.app.sass, paths.demo.sass], ['sass', 'demo']);
});

gulp.task('dev', ['sass', 'demo', 'server']);

gulp.task('default', ['sass']);

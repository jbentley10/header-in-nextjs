// Load plugins
var gulp = require('gulp');

gulp.task('css', function () {
  const postcss = require('gulp-postcss')
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp.src('styles/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))

    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))

    .pipe(gulp.dest('build/'))
})

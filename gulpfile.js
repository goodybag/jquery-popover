var gulp          = require('gulp');
var less          = require('gulp-less');
var minifyCSS     = require('gulp-minify-css');
var uglify        = require('gulp-uglify');
var ver           = require('gulp-ver');
var path          = require('path');

gulp.task('less', function() {
  return gulp.src('src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS())
    .pipe(ver())
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(ver())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', [ 'less', 'compress' ]);

// Konfigurasi
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
 // untuk menjalankan SASS (compile dari SASS menjadi CSS dengan destinasi folder src)
gulp.task('sass', function () {
  return gulp.src('./src/assets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

// menjalankan task watch dan menjalankan task watch
gulp.task('sass:watch', function () {
  gulp.watch('./ssrc/assets/*.scss', ['sass']);
});


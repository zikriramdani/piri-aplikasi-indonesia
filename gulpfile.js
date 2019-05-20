// Konfigurasi
var gulp  = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var merge = require('merge-stream');
var clean = require('gulp-clean');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var zip = require('gulp-zip');
var gutil = require('gulp-util');

// untuk menjalankan SASS (compile dari SASS menjadi CSS dengan destinasi folder src)
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/*.scss')
    //.pipe(sass().on('error', sass.logError))
    .pipe(plumber({
        errorHandler:function(err){
            notify.onError({
                title : "Gulp error in " + err.plugin,
                message : err.toString()
            })(err)
        }
    }))
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./src'))
    .pipe(reload({stream: true}));
});

// // Clean Build Directory
gulp.task('cleanBuild',function(){
    return gulp.src('dist', {read: false})
    .pipe(clean());
});

// Deploy to Build Directory
// gulp.task('build', ['cleanBuild'], function(){
gulp.task('build', function(){

    // optimasi css
    var cssOptimize = gulp.src('./src/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));

    // menggabung semua file js dan optimasi
    var jsOptimize = gulp.src('./src/assets/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

    // optimasi image
    var imgOptimize = gulp.src('./src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))

    // optimasi html
    var htmlOptimize = gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

    // fonts folder
    var fonts= gulp.src('./src/assets/fonts/**')
    .pipe(gulp.dest('dist/fonts'));

    return merge(cssOptimize,jsOptimize,imgOptimize,htmlOptimize,fonts); 
})

// Deploy to Zip file
// gulp.task('buildZip',['deploy'],function(){
//     var zipNow = gulp.src('dist/**')
//     .pipe(zip('deploy.zip'))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('cfonts',function(){
//     gulp.src('./src/assets/fonts/**')
//     .pipe(gulp.dest('dist/fonts'));
// });

// Default Task. Local webserver dan sinkronisasi dengan browser. 
gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch('./src/**/*').on('change', reload);
    gulp.watch('./src/assets/sass/*.scss', gulp.series('sass'));
});
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    reload = browserSync.reload;

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            onError: notify.onError({
                wait: true,
                sound: true})
        }))
    .pipe(sourcemaps.write())
    /*.on('error', notify.onError())*/
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('css'))
    /*.pipe(minifycss())*/
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}));
});

gulp.task('scripts', function(){
    return gulp.src('js/**/*.js')
        .pipe(concat('test.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        open: false,
        server: {
            baseDir: "./",
            directory: true
        }
    });
});

 gulp.task('default', ['styles', 'browser-sync'], function(){
    gulp.watch('sass/**/*.scss', ['styles']);
 });

/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css');
    rename = require('gulp-rename')
    notify = require('gulp-notify')
    autoprefixer = require('gulp-autoprefixer')

// Styles
gulp.task('styles', function () {
    return sass('ui-gradients.scss')
        //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({message: 'Styles task complete'}));
});


gulp.task('default', ['styles'])


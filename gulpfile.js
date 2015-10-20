// Gulp
var gulp = require('gulp'),

	sass      = require('gulp-sass'),
	maps      = require('gulp-sourcemaps'),
	minifycss = require('gulp-minify-css'),
    cssGlobbing = require('gulp-css-globbing'),
	uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    del = require('del');

// Compile all your Sass
gulp.task('compileSass', function (){
    gulp.src(['./_assets/stylesheets/global.scss'])
        .pipe(maps.init())
        .pipe(cssGlobbing({extensions: ['.scss']}))
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            errLogToConsole: false,
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./assets/dev/css'))
        .pipe(minifycss())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./assets/css/'));
});

// Move some files
gulp.task('move', function(){
    gulp.src('./_assets/images/*.svg')
        .pipe(gulp.dest('./assets/images/svg'));
    gulp.src('./_assets/fonts/*.*')
        .pipe(gulp.dest('./assets/fonts'));
});

// Concat Javascripts
gulp.task("concatScripts", function() {
    gulp.src(['./_assets/javascripts/_libs/*.js', './_assets/javascripts/_plugins/*.js', './_assets/javascripts/_scripts/*.js'])
            .pipe(concat('global.js'))
            .pipe(gulp.dest('./assets/dev/js'))
            .pipe(uglify())
            .pipe(gulp.dest('./assets/js/'));
});

// Lint the JavaScript
gulp.task('lint', function() {
    return gulp.src('./_assets/javascripts/_scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Clean out old files
gulp.task('clean', function() {
  del(['./assets/css', './assets/js', './assets/dev']);
});


// Files to watch
gulp.task('watch', function(){
    gulp.watch('./_assets/stylesheets/**/*.scss', ['compileSass']);
    gulp.watch('./_assets/javascripts/**/*.js', ['concatScripts', 'lint']);
});

// The default gulp task
gulp.task('default', ['clean', 'compileSass', 'concatScripts', 'watch']);

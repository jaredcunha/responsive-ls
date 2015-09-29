// Gulp
var gulp = require('gulp'),

	sass      = require('gulp-sass'),
	maps      = require('gulp-sourcemaps'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

// compile all your Sass
gulp.task('compileSass', function (){
    gulp.src(['./_assets/stylesheets/global.scss'])
        .pipe(maps.init())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            errLogToConsole: false,
            outputStyle: 'expanded'
        }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./assets/dev/css'));
    gulp.src(['./assets/dev/css/global.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task("concatScripts", function() {
    gulp.src(['assets/js/libs/*.js', 'assets/js/plugins/*.js', 'assets/js/scripts/*.js'])
            .pipe(concat('global.js'))
            .pipe(gulp.dest('dist/dev/js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/prod/js'));
});

gulp.task('clean', function() {
  del(['assets/css', 'assets/js']);
});


// Files to watch
gulp.task('watch', function(){
    gulp.watch('_assets/stylesheets/**/*.scss', ['compileSass']);
    gulp.watch('_assets/javascripts/**/*.js', ['scripts', 'lint', 'move']);
});

// The default gulp task
gulp.task('default', ['watch'])

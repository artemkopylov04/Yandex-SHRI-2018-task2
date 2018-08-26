'use strict';

const gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-cssnano'),
    prefix      = require('gulp-autoprefixer'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    sassLint    = require('gulp-sass-lint'),
    runSequence = require('run-sequence'),
    webserver   = require('gulp-webserver');

const displayError = function(error) {
    let errorString = '[' + error.plugin.error.bold + ']';
    errorString += ' ' + error.message.replace("\n",'');

    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber.bold;

    console.error(errorString);
};

const onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Basso"
    })(err);
    this.emit('end');
};

const sassOptions = {
    outputStyle: 'expanded'
};

const prefixerOptions = {
    browsers: ['last 2 versions']
};

const webserverOptions = {
    livereload: true,
    directoryListing: false,
    open: true,
    port: 3333
};

gulp.task('webserver', function() {
    return gulp.src('./')
        .pipe(webserver(webserverOptions));
});


gulp.task('styles', function() {
    return gulp.src('src/sass/**/*.sass')
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass(sassOptions))
        .pipe(prefix(prefixerOptions))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
});

gulp.task('sass-lint', function() {
    gulp.src('src/sass/**/*.sass')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['styles']);
});

gulp.task('default', function(done) {
    runSequence('styles', 'webserver', 'watch', done);
});

gulp.task('build', function(done) {
    runSequence('styles', done);
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

var inputSass = ['./scss/**/*.scss'];
var outpoutSass = './dist';

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('clean:css', function () {
    return gulp.src(['./dist/*.css'], {read: false})
        .pipe(clean());
});

gulp.task('sass', ['clean:css'], function () {

	var sassOptions = {
		errLogToConsole: true,
		outputStyle: 'compact'
	};

    return gulp
        .src(inputSass)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(outpoutSass));
});

gulp.task('connect', function() {
  connect.server({
    port:3030,
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    return gulp
        .watch(['./scss/**/*.scss', './*.html'], ['sass', 'html'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('sass:prod', ['clean:css'], function () {
    return gulp
        .src(inputSass)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(outpoutSass));
});

gulp.task('default', ['clean:css', 'sass', 'connect', 'watch']);
gulp.task('prod', ['clean:css', 'sass:prod']);
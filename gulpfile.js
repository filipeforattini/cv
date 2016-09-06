var browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
	elixir = require('laravel-elixir'),
	gulp = require('gulp');

	elixir(function(mix) {
	    mix.copy('node_modules/semantic-ui-css/components/*.css', 'resources/assets/css/vendor');
	    gulp.src('resources/assets/css/vendor/*.min.css').pipe(gulp.dest('resources/assets/css/vendor/min'));	
	});	

gulp.task('dependencies_css', function () {
	return gulp.src('resources/assets/css/vendor/*.min.css')
		.pipe(concat('app.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('dependencies_js', function () {
	
});

gulp.task('dependencies', ['dependencies_css', 'dependencies_js']);

gulp.task('compile_css', function() {
	elixir(function(mix) {
		mix.styles(['vendor/*.css'], 'dist/app.css');
	});
});

gulp.task('compile_js', function() {
	elixir(function(mix) {
    	mix.browserify('dist/app.js');
	});
});

gulp.task('compile', ['compile_css', 'compile_js']);

gulp.task('build', ['dependencies', 'compile'], function() {
	browserSync.reload({ stream: true });
});

gulp.task('browserSync', function () {
  browserSync.init();
});

gulp.task('watch', ['browserSync'], function (){
	gulp.watch('resources/assets/css', ['build']);
});
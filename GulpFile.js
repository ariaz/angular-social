var gulp = require('gulp'),
		concat = require('gulp-concat'),
		browserify = require('gulp-browserify'),
		server = require('./server'),
		serverport = 5000;


// Browserify task
gulp.task('browserify', function() {
  gulp.src(['app/scripts/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('dist/js'));
});

// Views task
gulp.task('views', function() {

  gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'));

  gulp.src('./app/views/**/*')
  .pipe(gulp.dest('dist/views/'));
});

// Dev task
gulp.task('dev', function() {
  server.listen(serverport);
});

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

// sass to scss - requires `gem install sass`
var sass = require('gulp-sass');
var replace = require('gulp-replace');
// ----------------------------
// Error Handler
// ----------------------------

var handleError = function (task) {
  return function (err) {
    notify.onError({
      message: 'Gulp task [' + task + '] failed, check the console..',
      sound: true
    })(err);
  };
};


// ----------------------------
// Tasks
// ----------------------------

var jsVendorFiles = [
  'js/jquery.js',
  'js/site.js'
];
function jsVendor() {
  return gulp.src(jsVendorFiles)
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist'))
  .pipe(rename('app.min.js'))
  .pipe(uglify({mangle: false}))
  .pipe(gulp.dest('dist'));
}

// clean /dist folder
function clean() {
  return Promise.all([
    del('dist/**/*')
  ]);
}
function cssApp() {
  return gulp.src('scss/**/*.scss')
  //.pipe(sourcemaps.init())
  .pipe(sass({}).on('error', function (err) {
    sass.logError;
    return notify().write(err);
  }))
  .pipe(cleanCSS())
  //.pipe(sourcemaps.write())
  .pipe(rename('app.min.css'))
  .pipe(gulp.dest('dist'));
}

function watch(cb) {
  //js
  gulp.watch('libs/*.js', jsVendor);
  //scss
  gulp.watch('scss/**/*.scss', cssApp);
  cb();
}

exports.jsVendor = jsVendor;
exports.cssApp = cssApp;
exports.clean = clean;
exports.watch = watch;

var build = gulp.series(clean, gulp.parallel(cssApp, jsVendor));
gulp.task('build', build, function (cb) {
  cb();
});

// run: gulp
gulp.task('default', gulp.series('build', watch));
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');

gulp.task('img', function (cb) {
    return gulp.src('.minecraft/resourcepacks/CanisminorCraft/**/*.png')
      	.pipe(cache(imagemin({
      		verbose: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('.minecraft/resourcepacks/CanisminorCraft/'))
    cb();
});

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sync = require('browser-sync').create();

function style(){
	// where is my scss file.
	return gulp.src('./assets/scss/*.scss')
	//compile 
	.pipe(sass())
	// where i save my css file.
	.pipe(gulp.dest('./assets/css/'))
	// stream for browser
	.pipe(sync.stream());
}

// for gulp watch
function watch(){
	sync.init({
		server:{
			baseDir:'./'
		}
	})
	gulp.watch('./assets/scss/*.scss', style);
	gulp.watch('./*.html').on('change', sync.reload);
}

exports.style = style;
exports.watch = watch;
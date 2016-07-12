// Load Modules.
var gulp 	= require('gulp');
var uglify 	= require('gulp-uglify');
var rename	= require('gulp-rename');

// Set the path the .JS file is located at.
var root_url = '';

// Compile JS.
gulp.task('compile', function() {
	return gulp.src(prefixSourceFiles(groupId, 'js'))
		.pipe(gulp.dest('./'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(root_url));
	});
}

// Create the default task so we don't have
// to specifically pass on the name for our
// task.
gulp.task('default', ['compile']);
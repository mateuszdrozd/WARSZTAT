var gulp= require('gulp');
var sass=require('gulp-sass');
var sourcemaps= require('gulp-sourcemaps');

gulp.task('scss', function() {
    return gulp.src("sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole:true, 
        outputStyle:'expanded',
        //sourceComments:true,
    
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function () {
    gulp.watch('sass/**/*.scss', ['scss'])

});


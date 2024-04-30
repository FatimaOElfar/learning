var gulp = require("gulp"),
  sourcemapps = require("gulp-sourcemaps"),
  prefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  pug = require("gulp-pug"),
  sass = require('gulp-sass')(require('sass')),
   livereload = require("gulp-livereload"),
   server = require("./server");
 var fileName;

 server();
gulp.task("css", function () {
  return (
    gulp
      .src("./project/css/*.scss")
      .pipe(sourcemapps.init())
       .pipe(sass())
      .pipe(prefixer("last 2 version"))
      // .pipe(concat("myskills.css"))

      .pipe(sourcemapps.write())
      .pipe(gulp.dest("./output/css"))
      .pipe(livereload())
  );
});
//html
gulp.task("html",function(){
  return gulp
  .src("./project/pages/*.pug")
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest("./output/"))
  .pipe(livereload())
});

// gulp.task('dev',function(){
//   gulp.watch('./project/pages/*.pug', gulp.series('html'));
//   gulp.watch('./project/css/*.scss',gulp.series('css'));
// })

const watchFiles= function(){
  gulp.watch('./project/pages/*.pug', gulp.series('html'));
  gulp.watch('./project/css/*.scss',gulp.series('css'));
}
gulp.task("watch",gulp.parallel(watchFiles));
// .pipe(sourcemapps.init())
// .pipe(concat("about.html"))
// .pipe(sourcemapps.write())
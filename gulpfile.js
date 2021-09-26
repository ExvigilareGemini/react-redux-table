// Requis
const gulp = require("gulp");

// Include plugins
const plugins = require("gulp-load-plugins")(); // tous les plugins de package.json
const sass = require("gulp-sass")(require("sass"));

gulp.task("css", function () {
  return gulp
    .src("./src/assets/sass/*.scss")
    .pipe(plugins.concat("style.css"))
    .pipe(plugins.sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({ indent: "  " }))
    .pipe(plugins.sourcemaps.init())
    .pipe(gulp.dest("./src/lib/style"));
});

gulp.task("minify", function () {
  return gulp
    .src("./src/lib/style/*.css")
    .pipe(plugins.csso())
    .pipe(
      plugins.rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("./src/lib/style"));
});

// // Tâche "js" = uglify + concat
// gulp.task('js', function() {
//   return gulp.src(source + '/assets/js/*.js')
//     .pipe(uglify())
//     .pipe(concat('global.min.js'))
//     .pipe(gulp.dest(prod + '/assets/js/'));
// });

gulp.task('docs', function(cb){
  const config = require("./jsdoc.conf.json")
  gulp.src(["./src/lib/*/*.jsx"], {read: false})
    .pipe(plugins.jsdoc3(config, cb))
})

gulp.task("build", gulp.series("css"));
gulp.task("prod", gulp.series("build", "minify"));
gulp.task("watch-css", function () {
  gulp.watch("./src/assets/sass/*.scss", gulp.series("build"));
});
gulp.task("watch-jsdoc", function () {
  gulp.watch("./src/lib/*/*.js", gulp.series("docs"));
});
gulp.task("default", gulp.series("build"));

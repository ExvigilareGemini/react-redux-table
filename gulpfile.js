// Requis
var gulp = require("gulp");

// Include plugins
var plugins = require("gulp-load-plugins")(); // tous les plugins de package.json
var sass = require("gulp-sass")(require("sass"));

gulp.task("css", function () {
  return gulp
    .src("./src/assets/sass/*.scss")
    .pipe(plugins.sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({ indent: "  " }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.autoprefixer())
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

gulp.task("build", gulp.series("css"));
gulp.task("prod", gulp.series("build", "minify"));
gulp.task("watch", function () {
  gulp.watch("./src/assets/sass/*.scss", gulp.series("build"));
});
gulp.task("default", gulp.series("build"));

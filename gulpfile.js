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

// Tâche "img" = Images optimisées
gulp.task('img', function () {
  return gulp.src('src/assets/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('src/lib/assets/img'));
});

gulp.task("build", gulp.series("css"));
gulp.task("prod", gulp.series("build", "minify"));
gulp.task("watch", function () {
  gulp.watch("./src/assets/sass/*.scss", gulp.series("build"));
});
gulp.task("default", gulp.series("build"));

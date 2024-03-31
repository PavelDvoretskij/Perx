import {browsersync, gulp, gulpif, imagemin, isDev, isProd, newer, paths, size} from "../imports.js";

export default function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(gulpif(isProd, imagemin({
            progressive: true
        })))
        .pipe(gulpif(isDev, size({
            showFiles: true
        })))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(gulpif(isDev, browsersync.stream()));
}

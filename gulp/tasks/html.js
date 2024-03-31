import {gulp, gulpif,size, htmlmin, plumber, browsersync, isDev, isProd, paths} from '../imports.js'

export default function html() {
    return gulp.src(paths.html.src)
        .pipe(gulpif(isDev, plumber()))
        .pipe(htmlmin({collapseWhitespace: isProd}))
        .pipe(gulpif(isDev, size({
            showFiles: true
        })))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(gulpif(isDev, browsersync.stream()));
}

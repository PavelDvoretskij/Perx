import {gulp, gulpif, gulppug,size, browsersync, isDev, isProd, paths} from '../imports.js'

export default function pug() {
    return gulp.src(paths.pug.src)
        .pipe(gulppug())
        .pipe(gulpif(isDev, size({
            showFiles: true
        })))
        .pipe(gulp.dest(paths.pug.dest))
        .pipe(gulpif(isDev, browsersync.stream()));
}

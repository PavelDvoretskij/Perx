import {babel, browsersync, gulp, gulpif, isDev, notify, paths, plumber, size, webpack} from "../imports.js";

export default function scripts() {
    return gulp.src(paths.scripts.src, {sourcemaps: true})
        .pipe(gulpif(isDev, plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        })))
        // .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(gulpif(isProd, uglify()))
        // .pipe(concat('main.min.js'))

        .pipe(gulpif(isDev, size({
            showFiles: true
        })))
        .pipe(webpack({
            mode: gulpif(isDev, 'development', 'production'),
            output:{
                filename: 'main.min.js'
            }
        }))
        // .pipe(gulpif(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(gulpif(isDev, browsersync.stream()));
}

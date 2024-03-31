import {
    gulp,
    paths,
    gulpif,
    plumber,
    notify,
    sourcemaps,
    sass,
    autoprefixer,
    cleanCSS,
    rename,
    size,
    browsersync,
    isDev,
    isProd
} from '../imports.js'

export default function styles() {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(isDev, plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        })))
        // .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(isProd, autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(isProd, cleanCSS({
            level: 2
        })))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        // .pipe(gulpif(isDev, sourcemaps.write('.')))
        // .pipe(gulpif(isDev, size({
        //     showFiles: true
        // })))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(gulpif(isDev, browsersync.stream()));
}

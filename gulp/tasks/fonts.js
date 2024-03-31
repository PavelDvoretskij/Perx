import {fonter, gulp, paths, ttf2woff2} from "../imports.js";

export default function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        // .pipe(gulp.src(paths.fonts.ttf))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.fonts.dest))
}

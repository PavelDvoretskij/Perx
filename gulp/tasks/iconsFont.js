import {gulp, paths} from "../imports.js";

export default function iconsFont() {
    return gulp.src(paths.iconsFont.src)
        .pipe(gulp.dest(paths.iconsFont.dest))
}

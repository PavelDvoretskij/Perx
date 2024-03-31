import {browsersync, gulp, paths} from "../imports.js";
import pug from "./Pug.js";
import styles from "./styles.js";
import scripts from "./scripts.js";
import img from "./img.js";

export default function watch() {
    browsersync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch(paths.pug.dest).on('change', browsersync.reload)
    gulp.watch(paths.pug.watch, pug)
    gulp.watch(paths.styles.watch, {usePolling: true}, styles)
    gulp.watch(paths.scripts.watch, scripts)
    gulp.watch(paths.images.src, img)
}

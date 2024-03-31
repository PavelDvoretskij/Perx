import {gulp,} from './gulp/imports.js'
import clean from "./gulp/tasks/clean.js";
import pug from "./gulp/tasks/Pug.js";
import styles from "./gulp/tasks/styles.js";
import scripts from "./gulp/tasks/scripts.js";
import img from "./gulp/tasks/img.js";
import fonts from "./gulp/tasks/fonts.js";
import iconsFont from "./gulp/tasks/iconsFont.js";
import spriteMono from "./gulp/tasks/sprites.js";
import watch from "./gulp/tasks/watch.js";


gulp.task('clean', clean)
gulp.task('pug', pug)
gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('img', img)
gulp.task('fonts', fonts)
gulp.task('iconsFont', iconsFont)
gulp.task('spriteMono', spriteMono)
gulp.task('watch', watch)

let devHtml = gulp.series(clean, pug, gulp.parallel(styles, scripts, img, fonts, iconsFont, spriteMono), watch)
let buildHtml = gulp.series(clean, pug, gulp.parallel(styles, scripts, img, fonts, iconsFont, spriteMono))

gulp.task('dev', devHtml)
gulp.task('build', buildHtml)

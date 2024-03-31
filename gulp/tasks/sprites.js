import {browsersync, gulp, gulpif, paths, svgSprite} from "../imports.js";
import {svgo} from "gulp-imagemin";

export default function spriteMono() {
    return gulp.src(paths.iconsSvg.src)
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprites/sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest(paths.images.dest))}

// svg
//  use(xlink:href="img/sprites/sprite.svg#name")


import gulp from "gulp";
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulpif from "gulp-if";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import size from "gulp-size";
import browsersync from "browser-sync";
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import imagemin from 'gulp-imagemin'
import htmlmin from 'gulp-htmlmin'
import gulppug from 'gulp-pug'
import newer from 'gulp-newer'
import del from 'del'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
import webpack from 'webpack-stream'
import svgSprite from 'gulp-svg-sprite'

const sass = gulpSass(dartSass)


// Пути исходных файлов src и пути к результирующим файлам dest
const paths = {
    html: {
        src: ['src/*.html'],
        dest: 'dist/'
    },
    pug: {
        src: ['src/pug/pages/*.pug', 'src/index.pug'],
        watch: 'src/**/*.pug',
        dest: 'dist/',
    },
    styles: {
        src: ['src/styles/**/*.sass', 'src/index.scss'],
        watch: ['src/index.scss', 'src/styles/**/*.scss'],
        dest: 'dist/css/'
    },
    scripts: {
        src: ['src/index.js'],
        watch: ['src/scripts/**/*.js', 'src/index.js'],
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/**',
        dest: 'dist/img/'
    },
    fonts: {
        src: 'src/fonts/*.*',
        dest: 'dist/fonts/'
    },
    iconsFont: {
        src: 'src/iconsFont/*.*',
        dest: 'dist/iconsFont/'
    },
    iconsSvg: {
        src: 'src/icons/*.svg',
        dest: 'dist/img/sprites/'
    },
    awesome: {
        src: ['src/font-awesome-4.7.0/css/font-awesome.min.css', 'src/font-awesome-4.7.0/fonts/*.*'],
        dest: ['dist/font-awesome/css', 'dist/font-awesome/fonts']
    },
    reset: {
        src: ['src/styles/reset.css'],
        watch: ['src/styles/reset.css'],
        dest: ['dist/css/']
    }
}

let isDev = process.argv.includes('--dev'); // режим разработки
let isProd = !isDev; // сборка проекта

export {
    gulp,
    gulpif,
    plumber,
    notify,
    sourcemaps,
    autoprefixer,
    cleanCSS,
    sass,
    rename,
    size,
    browsersync,
    babel,
    uglify,
    concat,
    imagemin,
    htmlmin,
    gulppug,
    newer,
    svgSprite,
    del,
    fonter,
    ttf2woff2,
    webpack,
    isDev,
    isProd,
    paths
}

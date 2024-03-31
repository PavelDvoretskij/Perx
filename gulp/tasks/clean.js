import del from "del";

// Очистить каталог dist, удалить все кроме изображений
export default function clean() {
    return del(['dist/*'])
    // return del(['dist/*', '!dist/img'])
}

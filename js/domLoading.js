'use strict';
//DOMContentLoadedとはHTMLファイルがDOMツリーに変換されたタイミングで発火するイベント
//loadは画像、動画などすべてのコンテンツをダウンロードされた時に発火するイベント
document.addEventListener('DOMContentLoaded', () => {
    console.log('yeah');
});
window.addEventListener('load', () => {
    console.log('ok');
});
//documentに対してはloadは登録できない
// document.addEventListener('load', () => {
//     console.log('ok');
// });
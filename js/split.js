'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.animate-title');
    const string = element.innerHTML.trim().split('');

    element.innerHTML = string.reduce((ac, cur) => {
        cur = cur.replace(/\s+/, '&nbsp;');
        return `${ac}<span class="char">${cur}</span>`;
    });
}, "");
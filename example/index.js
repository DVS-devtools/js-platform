import JsPlatform from '../src/index.js';

const foo = JsPlatform.init({
    message: 'hello'
});

document.write(foo);
console.log(foo);
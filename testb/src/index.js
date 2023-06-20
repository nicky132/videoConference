// import testWorker from 'testa/dist/test.worker.worker.js';
import { Dog } from 'testa';
// 创建Web Worker实例
// const worker = new testWorker();
// node——moudel/testa/dist/index.js
console.log(Dog);
const dom = document.querySelector('h1');
const dog = new Dog(dom);
console.log(dog);
export { Dog };

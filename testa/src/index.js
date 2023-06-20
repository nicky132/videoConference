// import testWorker from 'worker-loader!./test.worker.js';
import testWorker from './test.worker.js';
// const workerURL = new URL('./test.worker.js', import.meta.url);
// console.log('workerURL', workerURL)
// webworker
class Dog {
    constructor(dom) {
        this.dom = dom;
        // this.worker = new Worker(workerURL);
        this.worker = new testWorker();
        this.onSend();
    }

    onSend() {
        setTimeout(() => {
            this.worker.postMessage({ msg: 'init' });
        }, 500);
        this.onReceive();
    }

    onReceive() {
        this.worker.onmessage = (e) => {
            this.dom.innerHTML = e.data;
        };
    }
}

export { Dog };

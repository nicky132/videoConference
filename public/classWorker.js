class MyWorker {
    constructor(functionCode, cb) {
        this.functionCode = functionCode;
        this.worker = null;
        this.onemessage = cb;
    }

    start() {
        const blob = new Blob([`${this.functionCode.toString()} ${this.functionCode.name}()`], { type: 'text/javascript'});
        const url = URL.createObjectURL(blob);
        this.worker = new Worker(url);
        this.worker.onmessage = (event) => this.onemessage(event.data)
    }

    end() {
        this.worker.terminate();
    }
}
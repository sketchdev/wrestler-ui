

class Server {
  constructor() {
    this.loggingFn = () => {
    };
  }

  subscribeToLogging(fn) {
    this.loggingFn = fn;
  }

  unsubscribeToLogging() {
    this.loggingFn = () => {
    };
  }
}

export default Server;

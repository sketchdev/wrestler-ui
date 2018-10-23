class Server {
  constructor({ port, config, rootUser, nodeEnv, morganFormat }) {
    this.port = port;
    this.config = config;
    this.rootUser = rootUser;
    this.nodeEnv = nodeEnv;
    this.morganFormat = morganFormat;
  }

  async run() {
    try {
      const { port, config, rootUser, nodeEnv, morganFormat } = this;
      const express = require('express');
      const cors = require('cors');
      const logger = require('morgan');
      const Wrestler = require('wrestler');
      const wrestler = new Wrestler();
      await wrestler.setup(config);

      if (rootUser) {
        await wrestler.createUserIfNotExist({
          email: rootUser.email,
          password: rootUser.password,
          firstName: rootUser.firstName,
          lastName: rootUser.lastName,
          rootUser: true,
          role: rootUser.role,
        });
      }

      const app = express();
      app.set('trust proxy', 1); // trust first proxy
      app.use(logger(nodeEnv === 'production' ? 'combined' : (morganFormat || 'dev')));
      app.use(cors());
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(wrestler.middleware());
      app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Server;

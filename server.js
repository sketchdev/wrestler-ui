exports.runServer = async (PORT = 3000, configFn = null) => {
  try {
    const express = require('express');
    const cors = require('cors');
    // const logger = require('morgan');
    const config = configFn || (() => {});
    const Wrestler = require('wrestler');
    const wrestler = new Wrestler();
    await wrestler.setup(config());

    // create a default admin user at startup
    // await wrestler.createUserIfNotExist({
    //   email: process.env.ROOT_EMAIL,
    //   password: process.env.ROOT_PASSWORD,
    //   firstName: process.env.ROOT_FIRST_NAME,
    //   lastName: process.env.ROOT_LAST_NAME,
    //   rootUser: true,
    //   role: 'admin'
    // });

    const app = express();
    app.set('trust proxy', 1); // trust first proxy
    // app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : (process.env.MORGAN_FORMAT || 'dev')));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(wrestler.middleware());
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  } catch (err) {
    console.error(err);
  }
};

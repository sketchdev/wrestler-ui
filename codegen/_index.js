require('dotenv').config();

(async () => {
  try {
    const PORT = process.env.PORT || 3001;
    const express = require('express');
    const cors = require('cors');
    const logger = require('morgan');
    const config = require('./config.js');
    const Wrestler = require('wrestler');
    const wrestler = new Wrestler();
    await wrestler.setup(config.wrestler.setup());

    await Promise.all(config.wrestler.users.map(user => wrestler.createUserIfNotExist(user)));

    const app = express();
    app.set('trust proxy', 1); // trust first proxy
    app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : (process.env.MORGAN_FORMAT || 'dev')));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(wrestler.middleware());
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  } catch (err) {
    console.error(err);
  }
})();

'use strict';

const bs = require('browser-sync');

module.exports = (gulp, plugins, config) => () => {
    bs.init({ server: './' })
    bs.watch('./**/*.*').on('change', bs.reload);
};

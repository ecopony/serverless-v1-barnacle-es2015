'use strict';

import Claws from './Claws';

module.exports.hello = (event, context, callback) => {
    let claws = new Claws();
    callback(null, claws.pinch());
};

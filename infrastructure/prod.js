var heroin = require('heroin-js');
var sharedConfig = require('./shared');
var _ = require('lodash');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prodProps = {
    name: 'theonlyrealbookinventory',
    domains: [ 'theonlyrealbookinventory.herokuapp.com']
};

var config = _.merge({}, sharedConfig, prodProps);
configurator(config);
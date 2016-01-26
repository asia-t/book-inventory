var heroin = require('heroin-js');
var sharedConfig = require('./shared');
var _ = require('lodash');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var stageProps = {
    name: 'theonlyrealbookinventory-stage',
    domains: [ `theonlyrealbookinventory-stage.herokuapp.com` ]
};

var config = _.merge({}, sharedConfig, stageProps);
configurator(config);
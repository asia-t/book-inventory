var heroin = require('heroin-js');
var sharedConfig = require('./shared');
var _ = require('lodash');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var stageProps = {
    name: 'theonlyrealbookinventory-stage',
    domains: [ `theonlyrealbookinventory-stage.herokuapp.com` ],
    config_vars: {
        MONGOLAB_URI: 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln',
        NODE_ENV: 'stage'
        }
};

var config = _.merge({}, sharedConfig, stageProps);
configurator(config);
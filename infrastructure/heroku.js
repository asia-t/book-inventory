var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('theonlyrealbookinventory')
    .then((res) => console.log(res));

function getConfig(domain) {
    return {
        name: domain,
        region: 'eu',
            maintenance: false,
        stack: 'cedar-14',
        config_vars: { MONGOLAB_URI: 'mongodb://heroku_rc6jxkln:jl60qp4df6khbm6tnh4j9139g6@ds035975.mongolab.com:35975/heroku_rc6jxkln' },
        addons: {},
        collaborators:
            [ 'mateusz.buczek@plan3.se',
                'joanna.turban@schibsted.pl',
                'mateusz.fiolka@gmail.com',
                'mateusz.fiolka@schibsted.pl' ],
                features:
        { 'runtime-dyno-metadata': { enabled: false },
            'log-runtime-metrics': { enabled: false },
            'http-session-affinity': { enabled: false },
            preboot: { enabled: false },
            'http-shard-header': { enabled: false },
            'http-end-to-end-continue': { enabled: false } },
        formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
            log_drains: [],
        domains: [ `${domain}.herokuapp.com` ]
    }
};

configurator(getConfig('theonlyrealbookinventory'));
configurator(getConfig('theonlyrealbookinventory-stage'));
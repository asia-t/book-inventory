var mongoRepository = require('./stockRepository')();
var app = require('./app')(mongoRepository);

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
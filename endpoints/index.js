var includes = [
    'all',
    'new',
    'insert'
];

includes.forEach(function (name) {
    exports[name] = require(__dirname + '/' + name);
});

var jade = require('jade');

var view = jade.compileFile('./templates/new.jade');

module.exports = function(req, res) {
    res.end(view({}));
};

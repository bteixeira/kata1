var jade = require('jade');

var view = jade.compileFile('./templates/all.jade');

module.exports = function(req, res) {
    res.end(view({
        spendings: [
            'Spending One',
            'Spending Two',
            'Spending Three'
        ]
    }));
};

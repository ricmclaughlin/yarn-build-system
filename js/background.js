let $ = require('jquery');

let makeBackgroundRed = function() {
    $('body').css('background-color', 'red');
};

module.exports = makeBackgroundRed;
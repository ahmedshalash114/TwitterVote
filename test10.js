

var page = require('webpage').create();


page.open('https://twitter.com/ashalash38/status/901551975879331840', function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            console.log(page.content)
            phantom.exit();
        }, 30000); // Change timeout as required to allow sufficient time 
    }
});
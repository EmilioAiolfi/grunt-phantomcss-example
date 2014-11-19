casper.start('http://localhost:9000/index.html')
.then(function() {
    phantomcss.screenshot('.header', 'Header Page');

})
.then(function() {
    phantomcss.screenshot('.footer', 'Footer Page');

})

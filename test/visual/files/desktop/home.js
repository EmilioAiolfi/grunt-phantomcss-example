
casper.thenOpen(phantomcss.baseURL + 'index.html')

casper.then(function() {
    phantomcss.screenshot('.header', 'Home - Header Page');
    phantomcss.screenshot('.footer', 'Home - Footer Page');

});

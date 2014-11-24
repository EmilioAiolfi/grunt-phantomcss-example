
casper.thenOpen(phantomcss.baseURL + 'products.html')

    .wait(1000, function() {

        casper.then(function() {
            phantomcss.screenshot('.container', 'products - page');
        });

        casper.then(function() {

            casper.click('.table.table-hover tbody tr:nth-child(1) td:nth-child(3)');
            casper.waitForSelector('#myModal[style*="display: block"]', function(){
                phantomcss.screenshot('.container', 'products Modal - open');
            });

        });
    })

    .then(function() {

        casper.click("#myModal .close");

        // aguarda modal desaparecer
        casper.waitForSelector('#myModal[style*="display: none"]', function(){
            phantomcss.screenshot('.container', 'products Modal - Close');
        });
    });

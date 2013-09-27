Ext.define('HW.Application', {
    name: 'HW',

    extend: 'Ext.app.Application',

    views: [],
    controllers: [],
    stores: ['Stocks'],
    models: ['Stock'],

    launch: function() {
        var stocks = this.getStocksStore();
        console.debug('Stock list:');
        stocks.each(function (stock) {
            console.dir(stock.data);
        });
    }
});

Ext.define('HW.model.Stock', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'symbol', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'mktCap', type: 'int' },
        { name: 'stockExchange', type: 'string' }

    ]
});

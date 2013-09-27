/**
 * Created with IntelliJ IDEA.
 *
 * @author      Max Malakhov <malakhovbox@gmail.com>
 * @version     0.1
 * @since       2013-09-28
 */
Ext.define('HW.store.Stocks', {
    extend: 'Ext.data.Store',
    model: 'HW.model.Stock',
    data: [
        { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 482.75, mktCap: 8136280, stockExchange: 'NASDAQ' },
        { id: 2, symbol: 'CSCO', name: 'Cisco Systems, Inc.', price: 23.33, mktCap: 82453060, stockExchange: 'NASDAQ' },
        { id: 3, symbol: 'FB', name: 'Facebook, Inc.', price: 51.24, mktCap: 81289262, stockExchange: 'NASDAQ' },
        { id: 4, symbol: 'GM', name: 'General Motors Company Common S', price: 36.37, mktCap: 14193376, stockExchange: 'NYSE' },
        { id: 5, symbol: 'JPM', name: 'JP Morgan Chase & Co. Common St', price: 52.24, mktCap: 23018156, stockExchange: 'NYSE' },
        { id: 6, symbol: 'C', name: 'Citigroup, Inc. Common Stock', price: 48.89, mktCap: 20248114, stockExchange: 'NYSE' }
    ]
});
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0;
    let buy = [-prices[0]];
    let rest = [0];
    let sell = [0];
    for (let i = 1; i < prices.length; i++) {
        buy[i] = Math.max(buy[i - 1], rest[i - 1] - prices[i]);
        rest[i] = Math.max(rest[i - 1], sell[i - 1]);
        sell[i] = buy[i - 1] + prices[i];
    }
    return Math.max(sell[prices.length - 1], rest[prices.length - 1]);
};

// think about states and transitions
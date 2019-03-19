/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let adjList = {};
    for (let i = 0; i < flights.length; i++) {
        if (adjList[flights[i][0]] === undefined) adjList[flights[i][0]] = [[flights[i][1], flights[i][2]]];
        else adjList[flights[i][0]].push([flights[i][1], flights[i][2]])
    }
    let price = Infinity;
    const dfs = (city, stops, sum) => {
        if (sum > price) return;
        if (city === dst) {
            if (sum < price) price = sum;
            return;
        }
        if (stops === -1) return;
        else if (adjList[city] === undefined) return;
        for (let i = 0; i < adjList[city].length; i++) {
            dfs(adjList[city][i][0], stops - 1, sum + adjList[city][i][1]);
        }   
    }
    dfs(src, K, 0);
    if (price === Infinity) return -1;
    return price;
};

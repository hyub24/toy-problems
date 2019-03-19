/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // let bitx = x.toString(2);
    // let bity = y.toString(2);
    // let distance = 0;
    // if (bitx.length > bity.length) {
    //     while(bitx.length > bity.length) {
    //         bity = '0' + bity;
    //     }
    // } else {
    //     while(bity.length > bitx.length) {
    //         bitx = '0' + bitx;
    //     }
    // }
    // for (let i = 0; i < bitx.length; i++) {
    //     if (bity[i] !== bitx[i]) distance++;
    // }
    // return distance;
    let z = (x^y).toString(2);
    let distance = 0;
    for (let i = 0; i < z.length; i++) {
        if (z[i] === '1') distance++;
    }
    return distance;
};

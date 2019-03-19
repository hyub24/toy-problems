/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    //declare check function for ipv4
    //loop through array
    // turn into number and check if it's between 0 to 255
    // loop through string to check if it has leading zeroes
    //declare check function for ipv6
    //loop through array
    //check if length of each string is the right length
    //split input into array
    //if array length is four then check if valid
    //if array length is 8 then check if valid
    // else return neither
    const check4 = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length === 0) return false;
            if (Number(arr[i]) >= 0 && Number(arr[i]) <= 255) {
                if (arr[i].length > 1 && arr[i][0] === '0') return false;
                for (let j = 0; j < arr[i].length; j++) {
                    if (Number(arr[i][j]) >= 0 && Number(arr[i][j]) <= 9) continue;
                    else return false;
                }
            } else return false;
        }
        return true;
    }
    const check6 = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length === 1 && arr[i][0] === '0') continue;
            else if (arr[i].length === 0) return false;
            else if (arr[i].length > 4) return false;
            for (let j = 0; j < arr[i].length; j++) {
                let char = arr[i][j].charCodeAt(0);
                if (char > 102) return false;
                if (char > 70 && char < 97) return false;
                if (char < 48) return false;
            }
        }
        return true;
    }
    let ipv4 = IP.split('.');
    let ipv6 = IP.split(':');
    if (ipv4.length === 4) {
        if (check4(ipv4)) return 'IPv4';
    }
    if (ipv6.length === 8) {
        if (check6(ipv6)) return 'IPv6';
    }
    return 'Neither';
};
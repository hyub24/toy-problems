/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    const count = Array(121).fill(0);
    for (let i = 0; i < ages.length; i++) {
        count[ages[i]]++;
    }
    let num = 0;
    for (let ageA = 1; ageA <= 120; ageA++) {
        for (let ageB = 1; ageB <= 120; ageB++) {
            if (ageB <= .5 * ageA + 7) continue;
            else if (ageA < ageB) continue;
            else if (ageB > 100 && ageA < 100) continue;
            else {
                num += count[ageA] * count[ageB];
                if (ageA === ageB) num -= count[ageA];
            }
        }
    }
    return num;
};
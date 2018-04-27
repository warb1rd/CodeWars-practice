// find the oldest age in array


function oldestAge(ages){
    var oldest = 0
    for (i=0; i<ages.length; i++) {
    if (ages[i]>oldest) {
        oldest = ages[i]
        }
    }
    return oldest
}
oldestAge([2, 1, 6, 3])
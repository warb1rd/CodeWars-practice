// find the oldest age in array


function OldestAges(ages){
    var largest = 0
    var array = []
    for (i=0; i<ages.length; i++) {
    if (ages[i]>largest) {
        largest = ages[i]
        array.push(largest);
        }
        return array
    }
}
OldestAges([2, 1, 6, 3])
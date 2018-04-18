//BUBBLE SORT ALGORITHM O(n2)

function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 0; i --) {
        for(let j = 1; j <= i; j ++) {
            if(arr[j - 1] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
        }
    }
    return arr
}

var myArray = [9, 2, 4, 3]
bubbleSort(myArray)
console.log(myArray)



//INSERTION SORT

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i ++) {
       let temp = arr[i]
       let j = i - 1
       while(j >= 0 && arr[j] > temp) {
           arr[j + 1] = arr[j]
           j--
       }
       arr[j + 1] = temp
    }
    return arr
}
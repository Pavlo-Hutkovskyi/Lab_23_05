//////////////////////6/////////////////////////

let arr = [ 16, 97, -9, 54, 1009, -107, 122, 0, 69 ];

console.log('\nArray: ' + arr);

function merge(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            merged.push(arr1[index1]);
            index1++;
        } else {
            merged.push(arr2[index2]);
            index2++;
        }
    }
    while (index1 < arr1.length) {
        merged.push(arr1[index1]);
        index1++;
    }
    while (index2 < arr2.length) {
        merged.push(arr2[index2]);
        index2++;
    }
    return merged;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log('\nSort array: ' + mergeSort(arr));
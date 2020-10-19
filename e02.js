function sortByInsertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr
}

console.log(sortByInsertion([0, 3, 6, 4, 2, 9]));
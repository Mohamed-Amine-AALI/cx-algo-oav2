function sortingBySelection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < smallest) {
                let temp = arr[j];
                arr[j] = smallest;
                smallest = temp;
                arr[i] = smallest;
            }
        }
    }
    return arr;
}

console.log(sortingBySelection([6, 7, 1, 9, 6, 4]));
function sortingBySelection(arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallest;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j])
                smallest = arr[i];
            else smallest = arr[j];
        }
        arr[i] = smallest;
    }
    return arr;
}

console.log(sortingBySelection([6, 7, 0, 9, 6, 4]));
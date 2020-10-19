function bubbleSort(arr) {
    let isSwapped;
    while(isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSwapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([7, 5, 0, 45, -6, 9, 12]));
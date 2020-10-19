function bubbleSort(arr) {
    let continu = true;
    for (let i = 0; i < arr.length && continu == true; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
        else continu == false;  
    }
    return arr;
}

console.log(bubbleSort([7, 5, 0]));
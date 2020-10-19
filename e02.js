function sortByInsertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i+1];
        if (temp < arr[i]) {
            arr[i+1] = arr[i];
            arr[i] = temp;
        }   
    }
    return arr;
}

console.log(sortByInsertion([0, 3, 6, 4, 2 ,9]));
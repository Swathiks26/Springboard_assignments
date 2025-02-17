function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i];
  
      for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = currentValue;
    }
  
    return arr;
  }
  console.log(insertionSort([0, -10, 7, 4]));
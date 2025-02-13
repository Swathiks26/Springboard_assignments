function bubbleSort(arr){
    for (i=0; i<arr.length;i++ ){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }

        }
    }
    return(arr)
}

let arr = [
    0, -10, 7, 4]
console.log(bubbleSort(arr));
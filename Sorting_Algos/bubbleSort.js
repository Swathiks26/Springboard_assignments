// Sorting in ascending
function bubbleSort1(arr){
    let count=0;
   for (let i=0; i<arr.length;i++ ){
        for(let j=i+1;j<arr.length;j++){
            count++;
            if(arr[i]>arr[j]){
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    console.log(count);
    return(arr);
 }

// Sorting in descending
function bubbleSort2(arr){
    let count=0;
    for(let i=arr.length; i>0 ;i-- ){
        for(let j=0;j<i-1;j++){
            count++;
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
    
        }
    }
    console.log(count);
        return(arr)
 }

function bubbleSort3(arr){
    let count=0;
    for (let i=1;i<arr.length; i++){
        let swapped='false';
        for (let j=0; j< arr.length-i;j++){
            count++;
            if (arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped='true';
                
            }
        }
        if (swapped=='false'){
            break;
        }
    }
    console.log(count);
    return(arr)


}
let arr = [
    2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(bubbleSort2(arr));
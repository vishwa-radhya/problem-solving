/**
 * remove duplicates from sorted array
 */
// using extra space
function remove_duplicates_from_sorted_array_in_place_and_return_length(arr){
    let k=1
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            arr[k]=arr[i]
            k++
        }
    }
    console.log(k);
}
// remove_duplicates_from_sorted_array_in_place_and_return_length([1,1,2,2,3,4,4,4,5,5,6])

function remove_occurence_of_element_and_return_length(arr,val){
    let k=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            arr[k]=arr[i]
            k++
        }
    }
    console.log(k);
}
// remove_occurence_of_element_and_return_length([1,2,3,2,2,2,1,2],2)
/* 
	Binary search (non-recursive) for ICS3U(Pat.Lego)
*/

// Random hardcoded array used to search
var arr = [1,2,5,6,11];
var foundAt = binarySearch(0, (arr.length-1), 11);
console.log("Looking in array, size: " + arr.length);


if (foundAt == -1){
	console.log("Number not found in array. ");
}
else {
	console.log("Number found at " + foundAt);
}


// Iterative Binary search
function binarySearch(left, right, x)
{
    while (left <= right)
    {	
    	//Make sure that this is converted to int and not a float
        var mid = parseInt(left + (right-left)/2);		
 
        // Check if x is present at mid
        if (arr[mid] == x){
            return mid;
        }
 
        // If x greater, ignore left half
        else if (arr[mid] < x){
            left = mid + 1;
        }
 
        // If x is smaller, ignore right half
        else{
            right = mid - 1;
        }
    }
 
    // if we reach here, then element was not present
    return -1;
}



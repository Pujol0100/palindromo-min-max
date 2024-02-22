function isPalindrome(str){
    
	str = str.toLowerCase();
	str = str.split(" ");
	str = str.join("");
	
	for (let i = 0 ; i <= str.length ; i++) {
		
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	
	return true
}

function arrayMaxMin(arr){
	
	let arrMax = arr[0];
	let arrMin = arr[arr.length - 1];
	
	for (let i = 0 ; i <= arr.length ; i++) {
		
		if (arr[i] > arrMax) {
			
			arrMax = arr[i];
		} else {
			
			arrMax = arrMax;
		}
		
		if (arr[i] < arrMin) {
			
			arrMin = arr[i]
		} else {
			
			arrMin = arrMin
		}
	}
	
	let resultArr = [arrMin, arrMax]
	return resultArr

}

load("dispArr.js");

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data && i > (arr.length * 0.2)) {
			swap(arr,i,0);
			return true;
		}
		else if (arr[i] == data) {
			return true;
		}
	}
	return false;
}

var nums = [];
for (var i = 0; i < 10; ++i) {
	nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
print();
print("Enter a value to search for: ");
var val = parseInt(readline());
if (seqSearch(nums, val)) {
	print("Found element: ");
	print();
	dispArr(nums);
}
else {
	print(val + " is not in array.");
}


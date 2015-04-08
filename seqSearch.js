//luke grube
//example 13-1

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if(arr[i] == data) {
			return true;
		}
	}
	return false;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = Math.floor(Math.random() * 101);
}
disArr(nums);
putstr("Enter a number to search for: ");
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
	print(num + " is in the array.");
}
else {
	print(num + " is not in the array.");
}
print();
dispArr(nums);

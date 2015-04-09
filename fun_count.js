
function binSearch(arr, data) {
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		}
		else if (arr[mid] < data) {
			upperBound = mid - 1;
		}
		else {
			return mid;
		}
	}
	return -1;
}

function count(arr, data) {
	var count = 0;
	var position = binSearch(arr, data);
	if (position > -1) {
		++count;
		for (var i = position-1; i > 0; --i) {
			if (arr[i] == data) {
				++count;
			}
			else {
				break;
			}
		}
	for (var i = position+1; i < arr.length; ++i) {
		if (arr[i] == data) {
			++count;
		}
		else {
			break;
		}
	}
	}
	return count;
}

function insertionsort(arr) {
	var temp, inner;
	for (var outer = 1; outer <= arr.length-1; ++outer) {
		temp = arr[outer];
		inner = outer;
		while (inner > 0 && (arr[inner-1] >= temp)) {
			arr[inner] = arr[inner-1];
			--inner;
		}
		arr[inner] = temp;
	}
}

function dispArr(arr) {
	for (var i = 0; i < arr.length; ++i) {
		print(arr[i] + " ");
		if (i % 10 == 9) {
			print("\n");
		}
	}
	if (i % 10 != 0) {
		print("\n");
	}
}

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
print("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("found " + retVal + " occurrences of " + val + ".");

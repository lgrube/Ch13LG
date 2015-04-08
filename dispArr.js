function dispArr(arr) {
	for (var i = 0; i < arr.length; ++i) {
		print(arr[i] + " ");
		if(i % 10 == 9) {
			print("\n");
		}
	}
	if(i % 10 != 0) {
		print("\n");
	}
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

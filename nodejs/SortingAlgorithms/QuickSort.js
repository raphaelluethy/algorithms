const counter = 0;

const QuickSort = (inputArray, left, right) => {
	if(left < right) {
		let pi = partition(inputArray, left, right);

		QuickSort(inputArray, left, pi - 1);
		QuickSort(inputArray, pi + 1, right);
	}
	console.log(inputArray);
}

const partition = (array, left, right) => {
	let pivot = array[right];
	let i = (left - 1);

	for(let j = left; j <= right - 1; j++) {
		if(array[j] < pivot) {
			i++;
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	let temp = array[i + 1];
	array[i + 1] = array[right];
	array[right] = temp;
	return (i + 1);
}

QuickSort([1,5,4,22,6,7,3,2], 0 , 7);


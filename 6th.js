var ar = [['order', 'food'], ['recipe', 'biryani'], ['cost',200]];
function fromListToObject(arr) {
	var rv = {};
	for (var i = 0; i < arr.length; ++i){
		rv[i] = arr[i];
	}
    return rv;
}
console.log(fromListToObject(ar))
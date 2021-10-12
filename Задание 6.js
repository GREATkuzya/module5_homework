let array = [5, 5, 5, 5, 5];
for (let i=0; i < array.length; i++)
var check = array.every(function(elem) {
	if (elem === array[i]) {
		return true;
	} else {
		return false;
	}
});
console.log(check);
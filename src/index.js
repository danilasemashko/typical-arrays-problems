
exports.min = function min (array) {
	if (array === undefined){
		return(0);
	}
	else{
if (array.length === 0){
	return(0);
}
else{
	return(Math.min.apply(Math, array));
}
 
}
}

exports.max = function max (array) {
 	if (array === undefined){
		return(0);
	}
	else{
if (array.length === 0){
	return(0);
}
else{
	return(Math.max.apply(Math, array));
}
 
}
}
exports.avg = function avg (array) {
  if (array === undefined){
		return(0);
	}
	else{
if (array.length === 0){
	return(0);
}
else{
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
var number = sum / array.length;
return(number);
}
}
}

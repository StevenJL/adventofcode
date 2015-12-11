// node day2.js

dims_array = require('fs').readFileSync('./dim.dat').toString().split('\n');

var area = 0;

var arrayMin = function (arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};

gift_wrap_area = function(x, y, z){
  return 2*x*y + 2*x*z + 2*y*z;
}

flap_area = function(x, y, z){
 return arrayMin([x*y, x*z, y*z]);
}

compute_area = function(str){
  var dim_array = str.split('x').map(Number);
  var x, y, z;
  x = dim_array[0];
  y = dim_array[1];
  z = dim_array[2];
  return (gift_wrap_area(x, y, z) + flap_area(x, y, z));
}

debugger;

for(var indx = 0; indx < dims_array.length; indx++){
  var dim = dims_array[indx];

  if (dim.length == 0){
    continue;
  } else {
    area = area + compute_area(dims_array[indx]);
  }
}

debugger;
console.log(area);



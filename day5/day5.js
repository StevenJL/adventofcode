// node day4.js

// helpers

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

// actual program

str_array = require('fs').readFileSync('./str.dat').toString().split('\n');

nice_strings = 0;

var includes_bad_strs = function(str){
  var output = false;
  var bad_chars = ['ab', 'cd', 'pq', 'xy'];
  for(var indx = 0; indx < bad_chars.length; indx++){
    if(str.indexOf(bad_chars[indx]) == -1){
      continue;
    } else {
      output = true;
    }
  }
  return output;
}

var is_vowel = function(char){
  return ['a','e','i', 'o', 'u'].contains(char);
}

var three_vowels = function(str){
  var vowels_so_far = 0; 

  for(var indx = 0; indx < str.length; indx++){
    if(is_vowel(str[indx])){
      vowels_so_far++; 
    }
  }
  return (vowels_so_far > 2);
}

var has_double = function(str){
  output = false;
   
  for(var indx = 0; indx < (str.length - 1); indx++){
    if (str[indx] == str[indx+1]) {
      output = true; 
    }
  }
  return output;
}

var is_nice = function(str){
  if (!includes_bad_strs(str) && has_double(str) && three_vowels(str)){
    output = true;
  } else {
    output = false;
  }
  return output;
}

var analyze = function(str){
  if(is_nice(str)){
    nice_strings = nice_strings + 1;
  }
}

three_vowels("ugknbfddgicrmopn")

for(var indx = 0; indx < str_array.length; indx++){
  if (str_array[indx].length == 0){
    continue;
  } else {
    analyze(str_array[indx]);
  }
}

console.log(nice_strings);



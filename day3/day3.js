// node day3.js

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

dir_str = require('fs').readFileSync('./dir.dat').toString()

santa_pos = [0,0];
num_houses_visited = 1;
visited = ['00'];

var move_santa = function(dir){
  var x, y;
  x = santa_pos[0]
  y = santa_pos[1]

  if (dir == '>'){
    santa_pos[0] = x + 1;
  } else if (dir == '<') {
    santa_pos[0] = x - 1;
  } else if (dir == '^') {
    santa_pos[1] = y + 1; 
  } else if (dir == 'v') {
    santa_pos[1] = y - 1
  }
}

var stringify_pos = function(arr){
  return (arr[0].toString() + arr[1].toString());
}

for(var indx = 0; indx < dir_str.length; indx++){
  if (['<', '>', '^', 'v'].contains(dir_str[indx])) {
    move_santa(dir_str[indx]);
    if (visited.contains(stringify_pos(santa_pos))){
      continue; 
    } else {
      visited.push(stringify_pos(santa_pos));
      num_houses_visited  = num_houses_visited + 1;
    }
  } else {
    continue;
  }
}

console.log(num_houses_visited);



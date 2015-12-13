// node day6.js

instructions_array = require('fs').readFileSync('./instructionsp.dat').toString().split('\n');

light_grid = []

NUM_ROWS = 1000;
NUM_COLS = 1000;

for(var i = 1; i <= NUM_ROWS; i++){
  var row_of_lights = [];
  for(var j =1 ; j <= NUM_COLS; j++){
    row_of_lights.push(0);
  }
  light_grid.push(row_of_lights.slice(0));
}

toggle_light = function(val){
  if (val == 1) {
    return 0;
  } else if (val == 0) {
    return 1;
  }
}

change_light = function(action, row, col){
  if (action == 'on') {
    light_grid[row][col] = 1;
  } else if (action == 'off') {
    light_grid[row][col] = 0;
  } else if (action == 'toggle') {
    light_grid[row][col] = toggle_light(light_grid[row][col]);
  }
}

update_grid = function(action, strt_pt, end_pt){
  var strt_array = strt_pt.split(',');
  var end_array = end_pt.split(',');

  var strt_row = Number(strt_array[0]);
  var strt_col = Number(strt_array[1]);

  var end_row = Number(end_array[0]);
  var end_col = Number(end_array[1]);

  for(var row_indx = strt_row; row_indx <= end_row; row_indx++){
    for(var col_indx = strt_col; col_indx <= end_col; col_indx++){
      change_light(action, row_indx, col_indx); 
    }
  }
}

interpret_and_perform = function(instruction){
  var instr_array = instruction.split(" ");
  var action = instr_array[0]; 
  var strt_pt = instr_array[1]; 
  var end_pt = instr_array[3]; 

  update_grid(action, strt_pt, end_pt);
}

for(var indx = 0; indx < instructions_array.length; indx++){
  if(instructions_array[indx] == ''){
    continue;
  }
  interpret_and_perform(instructions_array[indx]);
}

count_lights = function(){
  var num_lights = 0;
  for(var row_indx = 0; row_indx < NUM_ROWS; row_indx++){
    for(var col_indx = 0; col_indx < NUM_COLS; col_indx++){
      num_lights = num_lights + light_grid[row_indx][col_indx]
    }
  }
  return num_lights;
}

console.log(count_lights());



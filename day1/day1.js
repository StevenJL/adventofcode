// node day1.js 

floor = 0;
parens_str = require('fs').readFileSync('./parens.dat').toString();

for(var indx = 0; indx < parens_str.length; indx++)
{
  if(parens_str[indx] == '(') {
    floor = floor + 1; 
  } else if (parens_str[indx] == ')') {
    floor = floor - 1;
  }
}

console.log(floor);



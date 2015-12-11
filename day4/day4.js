secret_key = "iwrupvqb";

crypt = require("crypto")

var satisfied = function(str){
  var md5hash = crypt.createHash('md5').update(secret_key + str).digest('hex')
  return (md5hash.slice(0,5) == '00000');
}

indx = 1;
while(!satisfied(indx)){
  indx = indx + 1;
}

console.log(indx);


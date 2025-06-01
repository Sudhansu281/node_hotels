var fs = require('fs');
var os = require('os');
var _ = require('lodash')


var user = os.userInfo();
console.log(user);


// fs.appendFile('greeting.txt','hi'+user.username,()=>{})

var data = ["Person","Person",1,2,1,2];

var filter = _.uniq(data);
console.log(filter);

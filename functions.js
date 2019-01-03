var helloWorld = 'Hello World!';

console.log(helloWorld.replace('Hello', 'Hi'));

var today = new Date();
var year = today.getFullYear();
var year1 = today.getFullYear();
var est = new Date('Apr 16, 1996 12:34:15');
var diff = today.getTime() - est.getTime();
diff = (diff / 31556900000);
console.log(Math.floor(diff));
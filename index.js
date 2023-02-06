Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }

//Note: I think that THIS is referring to the current objects, which have the option of being the Boolean value, the number value, or the array value inputs because they are all equal to each other, including the function
//Ex:
//let user = {
//   name: 'shirshak',
//   age: 25,
//   say() {
//     //here this is the current object which is user
//     console.log(this.name); //print shirshak
//   },
// };
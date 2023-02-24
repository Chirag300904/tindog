var output = [];
var count = 1;
function f(n) {
    while (count <= n){
  if (count % 15 == 0) {
    output.push("fizzbuzz");
  } else if (count % 5 == 0) {
    output.push("buzz");
  } else if (count % 3 == 0) {
    output.push("fizz");
  } else {
    output.push(count);
  }
  count = count + 1 ;
}
console.log(output);
}

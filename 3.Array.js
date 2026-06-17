const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

arr[0] = 10;
console.log(arr);

arr.splice(1, 0, 20);
console.log(arr);


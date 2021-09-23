let a = [1, 2];
console.log('Type of a is', typeof (a));
for(let i = 0; i < a.length; i++) {
    console.log('a['+ i + '] is:'+ a[i]);
}
console.log(a);
let b = [3, 4];
console.log(b);
let c = [...a, ...b];//merging
console.log(c)
//generic function:block of code that performs a specific task,multiple tasks and multiple times
function add() {
    var a = 67;
    var b = 78;
    document.write(a + b);
    console.log(a + b);
}
add();

//ES6
const addd = (a,b) => {
    var a = 67;
    var b = 78;
    var c =a + b;
    console.log(a + b);
    document.write(a + b);
}
addd();
//ES7
const adddd = (a ,b) => console.log(a + b);
adddd(45, 67);

let name = "john";

function greet() {
    let name = "Siva";
    document.write(`Hello ,my name is ${name}`);
    console.log(`Hello ,my name is ${name}`);
}
greet();
document.write(`<br> Hello ,my name is ${name}`);
console.log(`Hello ,my name is ${name}`);
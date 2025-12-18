/*
const foo = () => console.log("FIRST");
const bar = () => setTimeout(() => { console.log("Second...");}, 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

*/

function varFunc() {
    console.log(1);
    setTimeout(() => console.log(2), 0);
    console.log(3);
}

varFunc();
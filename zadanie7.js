// let arrObj = [{
//     x:1,
//     y:'object one value',
//     operation:()=>'object one prafix '+this.x+this.y
// },{
//     x:2,
//     y:'object two value',
//     operation:()=>'object two prafix '+this.x+this.y
// },{
//     x:3,
//     y:'object three value',
//     operation:()=>'object three prafix '+this.x+this.y
// }];

const myFunction1 = ()=>{
    console.log("arrow function: ",this);
}
function myFunction2(){
    console.log("Normal function: ",this);
}

myFunction1();
myFunction2();
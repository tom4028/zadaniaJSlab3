const add = (a,b)=>{
    return a+b;
};
const subt = (a,b)=>{
    return a-b;
};
const multply = (a,b)=>{
    return a*b;
};
const divide = (a,b)=>{
    if(a!= 0 && b !=0){
        return (a/b).toFixed(4);
    }else{
        return 0;
    }
};
let func = (x,y)=>{
    return{
        x,y,
        z:null,
        setOperation:function(o){
            z = o;
        },
        calc:function(){
            return z(x,y);
        }
        
    }
};

let obj = func(2,3);
obj.setOperation(subt);
console.log(obj.calc());
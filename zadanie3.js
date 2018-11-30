let iife = (function(){
    let a;
    let showValue = function(){
        if(!a){
            return 'Brak danych';
        }
    };
    let reverseValue = function(){
        return a = {
            a
        }
    };
    let setValue = function(x){
        a = x;
    }
    return {
        showValue,
        reverseValue,
        setValue
    }
})();

let fun = (z)=>{

    iife.setValue(z);
    return iife.reverseValue();
};

console.log(fun(5));
let x =25;

let iife = (function(){
    let a = 45;
    let showValue = function(){
        if(!a){
            return 'Brak danych';
        }
    };
    let reverseValue = function(){
        return a = {
            a,x
        }
    };
    return {
        showValue,
        reverseValue
    }
})(x);

console.log(iife.showValue());
console.log(iife.reverseValue());
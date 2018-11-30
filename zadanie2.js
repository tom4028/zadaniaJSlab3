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
    let returnThis = function(){
        return this;
    }
    return {
        showValue,
        reverseValue,
        setValue,
        returnThis
    }
})();

console.log(iife.showValue());
console.log(iife.reverseValue());
iife.setValue(5);
console.log(iife.reverseValue());
console.log(iife.returnThis());
let arrObj = [{
    X:2,y:3
},{
    X:2,y:3
},{
    X:2,y:3
},{
    X:2,y:3
},{
    X:2,y:3
}];

let BaseObject = {
    X:1,y:0,
    sum:function(){
        return this.X+this.y;
    }
}

console.log(BaseObject.sum.call(arrObj[0]));


arrObj.forEach(function(obj){
    console.log(BaseObject.sum.call(obj));
})
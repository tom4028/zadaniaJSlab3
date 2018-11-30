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
    X:1,
    sum:function(y){
        return this.X+y;
    }
}

arrObj.forEach(function(obj){
    console.log(BaseObject.sum.call(obj,obj.y));
})


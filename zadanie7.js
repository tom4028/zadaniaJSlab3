const arrObj = [{
    x:1,
    y:'object one value',
    operation:function(){return'object one prafix '+this.x+this.y}
},{
    x:2,
    y:'object two value',
    operation:function(){return 'object two prafix '+this.x+this.y}
},{
    x:3,
    y:'object three value',
    operation:function(){return 'object three prafix '+this.x+this.y;}
}];


for(let i = 1;i<arrObj.length;i++){
    console.log(arrObj[i].operation.call(arrObj[i-1]));
    console.log(i);
    if(i==arrObj.length-1){
        console.log(arrObj[0].operation.call(arrObj[i]));
    }
}

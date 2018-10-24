let add = function(x,y,callback){
    console.log("x = "+x+" y= "+y);
    callback(x+y);
}
exports.add=add;
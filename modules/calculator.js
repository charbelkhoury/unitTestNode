let addition = require("./addition");
let cal = function(x,y,cb){
    console.log("the 2 numbers are :"+x+" "+y);
    if(x < 0){
        throw new Error ("number needs to be positive");
    }
    addition.add(x,y,function(res){
        console.log("result is"+res);

        addition.add(y,res,function(response){
            console.log("result is"+response);
            cb(response);
        })
    })
}

exports.cal=cal;
let chai=require('chai');
let expect=chai.expect;
let sinon = require("sinon");

let addition = require("../modules/addition");
let calculator = require("../modules/calculator");

describe('calculator test',()=>{
    
    it('it calculates 2 numbers',(done)=>{
        let add=sinon.stub(addition,"add").onFirstCall().yields(5).onCall(1).yields(9);
        add.withArgs(sinon.match.any,sinon.match.any);
        calculator.cal(1,4,function(result){
            expect(result).to.equal(9);
            done();
        })
    });
    it('it tries to calculates 2 numbers but throws an error from negative numbers',(done)=>{
        expect(function(){
            calculator.cal(-1,4,function(result){})
        }).to.throw(Error,"number needs to be positive");
        done();
    });
});
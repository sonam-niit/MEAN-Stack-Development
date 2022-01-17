describe("Spy Demo",function(){
    var x,y=null;

    beforeEach(function(){
        x={
            setY:function(value){
            y=value;
            },
            getY:function(){
                return y;
            }
        }

        spyOn(x,'setY').and.callThrough();
        spyOn(x,'getY').and.returnValue(456);
       // x.setY(34);
    })

    // it ('check spy was called',function(){
    //     expect(x.setY).toHaveBeenCalled();
    // })
    // it ('check spy was called with values',function(){
    //     expect(x.setY).toHaveBeenCalledWith(34);
    // })
    it('can call through and then stub it in its original spec',function(){
        x.setY(123);
        expect(y).toEqual(123);

        x.setY.and.stub();
        y=null;

        x.setY(123);
        expect(y).toBe(null);
    })
    it('return a specific value',function(){
        expect(x.getY()).toEqual(456);
    })
})
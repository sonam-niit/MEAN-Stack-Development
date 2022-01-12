describe("Get Nth Element",function(){

    it ('should be defined',function(){

            expect(window.getNthElement).toBeDefined();
    })

    it ('should return Nth Element',function(){
        var result= getNthElement([12,89,56,46],2);
        expect(result).toBe(56);
    })

    it ('Add function should be defined',function(){

        expect(window.add).toBeDefined();
        expect(add(3,6)).toBe(9);
    })
})

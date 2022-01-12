describe('Recipe Model',function(){

    it ('should exist',function(){
        expect(app.Models.Recipe).toBeDefined();
    })

    it('should have some default values',function(){

        var recipe= new app.Models.Recipe();
        
        expect(recipe.get('name')).toEqual('Sonam');

        expect(recipe.get('rating')).toEqual(4.5);

    })
})
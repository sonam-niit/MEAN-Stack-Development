describe('A recipe', function() {
    it('should exist', function() {
        
    expect(app.Models.Recipe).toBeDefined();
      
    });
    
      
    
    it('should have certain defaults', function() {
        
    var recipe = new app.Models.Recipe();
    
        
    expect(recipe.get('name')).toEqual('Unnamed');
        
    expect(recipe.get('rating')).toEqual(0);
        
    expect(recipe.get('ingredients').length).toEqual(0);
        
    expect(recipe.get('instructions').length).toEqual(0);
        
    expect(recipe.get('dateAdded')).toBeDefined();
      
    });
    
      
    
    it('should identify if it has nuts', function() {
        
    var noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
    
        
    var withNuts = new app.Models.Recipe(FIXTURES.recipes.withNuts);
        
        
    expect(noRestrictions.containsNuts()).toBe(false);
       
    expect(withNuts.containsNuts()).toBe(true);
      
    });
      
    
    it('should identify if it has eggs', function() {
        
    var noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
    
        
    var withEggs = new app.Models.Recipe(FIXTURES.recipes.withEggs);
        
        
    expect(noRestrictions.containsEggs()).toBe(false);
        
    expect(withEggs.containsEggs()).toBe(true);
      
    });
      
    
    it('should identify if it is vegetarian', function() {
        
    var noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
    
        
    var withMeat= new app.Models.Recipe(FIXTURES.recipes.withMeat);
        
        
    expect(noRestrictions.isVegetarian()).toBe(true);
        
    expect(withMeat.isVegetarian()).toBe(false);
      
    });
    });
    
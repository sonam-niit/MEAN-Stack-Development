describe('A recipe collection', function() {
    var fakeServer;
  
    beforeEach(function() {
      fakeServer = sinon.fakeServer.create();
      fakeServer.respondImmediately = true;
    });
  
    afterEach(function() {
      fakeServer.restore();
    });
  
    it('should exist', function() {
      expect(app.Collections.Recipes).toBeDefined();
    });
  
    it('should contain recipes', function() {
      var recipes = new app.Collections.Recipes([
        FIXTURES.recipes.noRestrictions,
        FIXTURES.recipes.withEggs
      ]);
  
      expect(recipes.length).toEqual(2);
      expect(recipes.first() instanceof app.Models.Recipe).toBeTruthy();
    });
  
    it('should consolidate recipe names', function() {
      var recipes = new app.Collections.Recipes([
        FIXTURES.recipes.noRestrictions,
        FIXTURES.recipes.noRestrictions,
        FIXTURES.recipes.withEggs,
      ]);
      
      expect(recipes.getRecipesNames()).toEqual(['Marinara', 'Eggs Benedict']);
    });
  
    it('should return the most recent recipe of a given name', function() {
      var recipes = new app.Collections.Recipes([
        FIXTURES.recipes.noRestrictionsRecent,
        FIXTURES.recipes.noRestrictions
      ]);
  
      var newestDate = recipes.getNewestFromName('Marinara').get('dateAdded');
  
      expect(newestDate).toEqual(FIXTURES.recipes.noRestrictionsRecent.dateAdded);
    });
  
    it('should have a remote data source', function() {
      var recipes = new app.Collections.Recipes();
  
      expect(recipes.url).toBeDefined();
    });
  
    //Before refactor
    xit('should populate data from the back end', function() {
      var recipes = new app.Collections.Recipes();
  
      var fakeServer = sinon.fakeServer.create();
      fakeServer.respondWith('/recipes', [
        '200',
        {'Content-Type': 'application/json'},
        JSON.stringify([FIXTURES.recipes.noRestrictions])
      ]);
  
  
      recipes.fetch();
  
      fakeServer.respond();
  
      expect(recipes.length).toBeGreaterThan(0);
  
      fakeServer.restore();
    });
  
    //After refactor
    it('should populate data from the back end', function() {
      var recipes = new app.Collections.Recipes();
  
      fakeServer.respondWith('/recipes', FIXTURES.server.recipes.ok);
  
      recipes.fetch();
  
      expect(recipes.length).toBeGreaterThan(0);
    });
  });

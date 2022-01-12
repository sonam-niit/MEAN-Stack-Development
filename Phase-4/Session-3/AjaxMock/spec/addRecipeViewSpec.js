describe('The add recipe view', function () {
    var addRecipeView;

    beforeEach(function () {
        addRecipeView = new app.Views.AddRecipe();
        addRecipeView.render();
        addRecipeView.$el.appendTo('body');
    });

    afterEach(function () {
        addRecipeView.$el.remove();
    });



    it('should have an editable field for name', function () {
        expect(addRecipeView.$el).toContainElement('input.recipe-name');
    });

    it('should allow a user to add ingredients', function () {
        expect(addRecipeView.$el).toContainElement('button.add-ingredient');
        addRecipeView.$('.add-ingredient').click();
        expect(addRecipeView.$el).toContainElement('.ingredient');
        expect(addRecipeView.$('.ingredient')).toContainElement('input.quantity')
        expect(addRecipeView.$('.ingredient')).toContainElement('input.base-ingredient')
        expect(addRecipeView.$('.ingredient')).toContainElement('input.modifier')
    });


    it('should allow a user to remove ingredients', function () {
        addRecipeView.$('.add-ingredient').click();
        addRecipeView.$('.remove-ingredient').click();
        expect(addRecipeView.$el).not.toContainElement('.ingredient');
    });

    it('should allow a user to add instruction steps', function () {
        expect(addRecipeView.$el).toContainElement('button.add-instruction-step');
        addRecipeView.$('.add-instruction-step').click();
        expect(addRecipeView.$el).toContainElement('.instruction-step');
        expect(addRecipeView.$('.instruction-step')).toContainElement('input.instruction-line');
    });


    it('should allow a user to remove instruction steps', function () {
        addRecipeView.$('.add-instruction-step').click();
        addRecipeView.$('.remove-instruction-step').click();
        expect(addRecipeView.$el).not.toContainElement('.instruction-step');
    });

    it('should update the model when clicking save', function () {
        // Define recipe    
        var recipeName = 'Beurre Monte';

        var firstIngredient = {
            quantity: '4 tablespoons',
            baseIngredient: 'water',
            modifier: ''
        };

        var secondIngredient = {
            quantity: '1 pound',
            baseIngredient: 'butter',
            modifier: 'cut into chunks'
        };

        var instructionOne = 'Boil water';
        var instructionTwo = 'Reduce heat and whisk butter in slowly';
        addRecipeView.$('.recipe-name').val(recipeName);


        // Add two ingredients

        addRecipeView.$('.add-ingredient').click();
        addRecipeView.$('.add-ingredient').click();
        var firstIngredientEl = addRecipeView.$('.ingredient').first();
        var secondIngredientEl = addRecipeView.$('.ingredient').last();
        firstIngredientEl.find('.quantity').val(firstIngredient.quantity);
        firstIngredientEl.find('.base-ingredient').val(firstIngredient.baseIngredient);
        secondIngredientEl.find('.quantity').val(secondIngredient.quantity);
        secondIngredientEl.find('.base-ingredient').val(secondIngredient.baseIngredient);
        secondIngredientEl.find('.modifier').val(secondIngredient.modifier);


        // Add two steps

        addRecipeView.$('.add-instruction-step').click();
        addRecipeView.$('.add-instruction-step').click();
        var firstInstructionEl = addRecipeView.$('.instruction-step').first();
        var secondInstructionEl = addRecipeView.$('.instruction-step').last();
        firstInstructionEl.find('.instruction-line').val(instructionOne);
        secondInstructionEl.find('.instruction-line').val(instructionTwo);
        addRecipeView.$('.save-recipe').click();
        expect(addRecipeView.model.get('name')).toEqual(recipeName);
        expect(addRecipeView.model.get('ingredients')).toEqual([firstIngredient, secondIngredient]);
        expect(addRecipeView.model.get('instructions')).toEqual([instructionOne, instructionTwo]);

    });
});

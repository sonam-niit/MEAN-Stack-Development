describe('A recipe view', function () {

    it('should exist', function () {

        expect(app.Views.Recipe).toBeDefined();

        expect($('#recipe-tmpl')).toBeInDOM();

    });



    it('should have a template', function () {

        var recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);


        var recipeView = new app.Views.Recipe({

            model: recipeModel

        });


        expect(recipeView.template).toBeDefined();

    });



    describe('A rendered view', function () {

        var recipeView, recipeModel;


        beforeEach(function () {

            recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);

            recipeView = new app.Views.Recipe({

                model: recipeModel

            });


            recipeView.render();

        });



        it('should have a title', function () {

            expect(recipeView.$('.recipe-name')).toHaveText(recipeModel.get('name'));

        });



        it('should have a rating', function () {

            expect(recipeView.$('.rating')).toHaveText(recipeModel.get('rating'));

        });



        it('should list ingredients', function () {

            var ingredientEl = recipeView.$('.ingredient').first();

            var ingredient = recipeModel.get('ingredients')[0];

            var expectedString = ingredient.quantity + ' ' +

                ingredient.baseIngredient + ', ' + ingredient.modifier;


            expect(ingredientEl).toHaveText(expectedString);

        });



        it('should list instructions', function () {

            var instructionEl = recipeView.$('.instruction').first();

            var instruction = recipeModel.get('instructions')[0];


            expect(instructionEl).toHaveText(instruction);

        });

    });



    describe('A notes section', function () {

        var recipeModel;

        var recipeView;


        beforeEach(function () {

            recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);

            recipeView = new app.Views.Recipe({

                model: recipeModel

            });

            recipeView.render();

            recipeView.$el.appendTo('body');

        });



        afterEach(function () {

            recipeView.$el.remove();

        });



        it('should have an add notes button', function () {

            expect(recipeView.$('.add-note')).toBeVisible();

        });



        it('should reveal a notes section when the button is clicked', function () {

            expect(recipeView.$('.note-area')).not.toBeVisible();

            recipeView.$('.add-note').click();


            // View after clicking add note


            expect(recipeView.$('.note-area')).toBeVisible();

            expect(recipeView.$('.add-note')).not.toBeVisible();

            expect(recipeView.$('.save-note')).toBeVisible();

            expect(recipeView.$('.cancel-note')).toBeVisible();

        });



        it('should return to it\'s normal state when cancelled', function () {

            recipeView.$('.add-note').click();


            recipeView.$('.cancel-note').click();



            // View after cancelling

            expect(recipeView.$('.note-area')).not.toBeVisible();

            expect(recipeView.$('.save-note')).not.toBeVisible();

            expect(recipeView.$('.cancel-note')).not.toBeVisible();

            expect(recipeView.$('.add-note')).toBeVisible();

        });



        it('should show a saved note', function () {

            var noteStr = 'Needs some spice. Maybe red pepper flakes when adding tomatoes?';


            // Simulate UI interactions

            recipeView.$('.add-note').click();

            recipeView.$('.note-area').val(noteStr);

            recipeView.$('.save-note').click();


            // View after saving

            expect(recipeView.$('.note-area')).not.toBeVisible();

            expect(recipeView.$('.save-note')).not.toBeVisible();

            expect(recipeView.$('.cancel-note')).not.toBeVisible();

            expect(recipeView.$('.add-note')).not.toBeVisible();

            expect(recipeView.$('.note')).toBeVisible();


            // Verify model has data

            expect(recipeModel.get('note')).toBe(noteStr);


            // Verify the view

            expect(recipeView.$('.note')).toHaveText(noteStr);

        });

    });

});

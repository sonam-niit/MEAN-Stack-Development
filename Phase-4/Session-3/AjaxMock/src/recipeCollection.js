var app= window.app || {};
app.Collections= app.Collections || {};

app.Collections.Recipes= Backbone.Collection.extend({
    model:app.Models.Recipe,
    comparator:'dateAdded',
    url:'/recipes',

    getRecipesNames:function(){
        return _.uniq(this.pluck('name'));
    },
    getNewestFromName:function(recipeName){
        var variations= this.where({
            name:recipeName
        });
        return _.last(variations);
    }
});
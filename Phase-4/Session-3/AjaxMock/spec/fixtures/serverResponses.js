var FIXTURES = window.FIXTURES || {};

FIXTURES.server = {
    'recipes':{
        'ok':[
            '200',
            {'content-type':'application/json'},
            JSON.stringify([FIXTURES.recipes.noRestriction])
        ]
    }
}
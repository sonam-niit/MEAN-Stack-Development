var util= require('util');

var myFunction= util.deprecate(
    function() 
    {
        console.log('My Function called');
    },
    "This fuction is deprecated",
    "Deprecation API"
)

myFunction();
module.exports = function(grunt){
    grunt.initConfig({
        ts:{
            default:{
                src:["**/*.ts","!node-modules/**/*.ts"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask("default",["ts"]);
}
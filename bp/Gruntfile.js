var babel = require('rollup-plugin-babel');

module.exports = function(grunt) {
  grunt.initConfig({
    rollup: {
      options: {
        plugins: function() {
          return [
            babel({
              exclude: './node_modules/**'
            })
          ];
        },
        sourceMap: true,
        external: ['jquery'],
        globals: {
          jquery: '$'
        }
      },
      files: {
        dest: 'public/app-production.js',
        src: 'src/app.js' // Only one source file is permitted
      }
    }
  });

  grunt.loadNpmTasks('grunt-rollup');

  grunt.registerTask('default', ['rollup']);
};

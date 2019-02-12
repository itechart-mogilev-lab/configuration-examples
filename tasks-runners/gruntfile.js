module.exports = function(grunt) {




  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      files: ["gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    concat: {
      dist: {
        // the files to concatenate
        src: ["src/**/*.js"],
        // the location of the resulting JS file
        dest: "dist/<%= pkg.name %>.js"
      }
    },
    uglify: {
      tasks: [],
      options: {
        // the banner is inserted at the top of the output
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          "dist/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]
        }
      }
    },
    watch: {
      files: ["<%= jshint.files %>"],
      tasks: ["jshint"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["jshint", "concat"]);
  grunt.registerTask("prod", ["jshint", "uglify", "concat"]);
};

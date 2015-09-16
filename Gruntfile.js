/* global module:false */
module.exports = function (grunt) {
  var port = grunt.option('port') || 8000;
  var base = grunt.option('base') || '.';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*!\n' +
        ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * http://lab.hakim.se/reveal-js\n' +
        ' * MIT licensed\n' +
        ' *\n' +
        ' * Copyright (C) 2015 Hakim El Hattab, http://hakim.se\n' +
        ' */'
    },

    qunit: {
      files: ['test/*.html']
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        src: 'js/reveal.js',
        dest: 'js/reveal.min.js'
      }
    },

    sass: {
      core: {
        files: {
          'css/reveal.css': 'css/reveal.scss',
          'css/sympany.css': 'css/sympany.scss'
        }
      },
      themes: {
        files: [
          {
            expand: true,
            cwd: 'css/theme/source',
            src: ['*.scss'],
            dest: 'css/theme',
            ext: '.css'
					}
				]
      }
    },

    autoprefixer: {
      default: {
        files: [
          {
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.css'
					}
				]
      }
    },

    cssmin: {
      compress: {
        files: {
          'css/reveal.min.css': ['css/reveal.css'],
          'css/sympany.min.css': ['css/sympany.css']
        }
      }
    },

    imagemin: {
      dynamic: { // Another target
        files: [{
          expand: true, // Enable dynamic expansion
          cwd: 'img/', // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
          dest: 'img_min/' // Destination path prefix
        }]
      }
    },

    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          head: false,
          module: false,
          console: false,
          unescape: false,
          define: false,
          exports: false
        }
      },
      files: ['Gruntfile.js', 'js/reveal.js']
    },

    connect: {
      server: {
        options: {
          port: port,
          base: base,
          livereload: true,
          open: true
        }
      }
    },

    zip: {
      'reveal-js-presentation.zip': [
				'index.html',
				'css/**',
				'js/**',
				'lib/**',
				'images/**',
				'plugin/**'
			]
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['Gruntfile.js', 'js/reveal.js'],
        tasks: 'js'
      },
      theme: {
        files: ['css/theme/source/*.scss', 'css/theme/template/*.scss'],
        tasks: 'css-themes'
      },
      css: {
        files: ['css/*.scss'],
        tasks: 'css-core'
      },
      html: {
        files: ['index.html']
      },
      img: {
        files: ['img/*.{png,jpg,gif}'],
        tasks: 'img'
      }
    }

  });

  // Dependencies
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-zip');

  // Default task
  grunt.registerTask('default', ['css', 'js', 'img']);

  // JS task
  grunt.registerTask('js', ['uglify']);

  // Theme CSS
  grunt.registerTask('css-themes', ['sass:themes']);

  // Core framework CSS
  grunt.registerTask('css-core', ['sass:core', 'autoprefixer', 'cssmin']);

  grunt.registerTask('img', ['imagemin']);

  // All CSS
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);

  // Package presentation to archive
  grunt.registerTask('package', ['default', 'zip']);

  // Serve presentation locally
  grunt.registerTask('serve', ['connect', 'watch']);

  // Run tests
  grunt.registerTask('test', ['jshint', 'qunit']);

};
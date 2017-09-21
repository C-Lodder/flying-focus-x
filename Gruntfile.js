module.exports = function(grunt) {

	grunt.initConfig({
		folder : {
			dist : 'dist',
			src  : 'src',
		},

		clean: {
			dist: [
				'dist/*'
			]
		},

		// Compile Sass source files to CSS
		sass: {
			options: {
				precision: '5',
				sourceMap: false
			},
			dist: {
				files: {
					'<%= folder.dist %>/css/flying-focus.css' : '<%= folder.src %>/scss/flying-focus.scss',
				}
			}
		},

		uglify: {
			dist: {
				options: {
					expand: true
				},
				files: {
					'<%= folder.dist %>/js/flying-focus.min.js': ['<%= folder.dist %>/js/flying-focus.js']
				}
			}
		},

		copy: {
			dist: {
				expand: true,
				cwd: '<%= folder.src %>/js',
				src: '**',
				dest: '<%= folder.dist %>/js/',
			},
		},

		// Let's minify some css files
		cssmin: {
			dist: {
				files: [{
					expand: true,
					matchBase: true,
					cwd: '<%= folder.dist %>/css',
					src: ['*.css', '!*.min.css'],
					dest: '<%= folder.dist %>/css',
					ext: '.min.css',
				}]
			}
		}

	});

	// Load required modules
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default',
		[
			'clean:dist',
			'sass:dist',
			'cssmin:dist',
			'copy:dist',
			'uglify:dist',
		]
	);

};

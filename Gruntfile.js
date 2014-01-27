module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['_scss/**/*.{scss,sass}','sass/**/**/*.{scss,sass}'],
				tasks: ['sass:dist']
			},
			livereload: {
				files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/application.css': '_scss/application.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

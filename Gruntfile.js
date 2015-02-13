module.exports = function (grunt) {

	var buildPath = "parse";

	grunt.initConfig({ 

		// Declare our package dependencies
		// use 'npm install' to retrieve them
		pkg: grunt.file.readJSON('package.json'),

		// Compass configuration
		compass: {
			styles: {
				options: {
					config: 'frontend-build/config.rb',
					basePath: 'frontend-build'
				}
			}
		},
		// clean files to production directory
		clean: [buildPath + "/public/_includes/js",buildPath + "/public/_includes/images","index.html"],

		// Copy files to production directory
		copy: {
			main: {
				files: [
					{
						// Copy all images, exclude _icons as these are
						// pre-compiled files for Compass to build sprites
						expand: true,
						cwd: 'frontend-build/',
						src: ['images/**', '!images/_icons/**', '!images/_icons2x/**'],
						dest: buildPath + '/public/_includes/',
						filter: 'isFile'
					},
					{
						// Copy all JS, at a later stage this will only copy
						// compiled JS through Uglify
						expand: true,
						cwd: 'frontend-build/',
						src: ['js/**'],
						dest: buildPath + '/public/_includes/',
						filter: 'isFile'
					},
					{
						// Copy all fonts
						expand: true,
						cwd: 'frontend-build/',
						src: ['fonts/**'],
						dest: buildPath + '/public/_includes/',
						filter: 'isFile'
					},
					{
						// Copy all sounds
						expand: true,
						cwd: 'frontend-build/',
						src: ['sounds/**'],
						dest: buildPath + '/public/_includes/',
						filter: 'isFile'
					},
					{
						// Copy all videos
						expand: true,
						cwd: 'frontend-build/',
						src: ['videos/**'],
						dest: buildPath + '/public/_includes/',
						filter: 'isFile'
					}
				]
			},
			install: {
				files: [
					{
						expand: true,
						cwd: '',
						src: ['index.html'],
						dest: buildPath + '/public/',
						filter: 'isFile'
					}
				]
			}
		},

		// Pole our files for changes
		watch: {
			js: {
				files: 'frontend-build/js/**',
				tasks: ['clean', 'copy', 'notify:watch'],
				options: {
					interrupt: true
				}
			},
			sass: {
				files: 'frontend-build/sassian/**',
				tasks: ['clean', 'compass', 'copy', 'notify:watch'],
				options: {
					interrupt: true
				}
			},
			images: {
				files: 'frontend-build/images/**',
				tasks: ['clean', 'copy', 'notify:watch'],
				options: {
					interrupt: true
				}
			}
		},

		// Send notification when build has completed, notify also alerts
		// the developer of any failed processes within Grunt.
		notify: {
			watch: {
				options: {
					title: 'Build Complete',  // optional
					message: 'All files have compiled and been moved', //required
				}
			},
			deploy: {
				options: {
					title: 'Deployment to Parse complete',  // optional
					message: 'All files have compiled and been deployed to Parse', //required
				}
			},
			install: {
				options: {
					title: 'First installation complete',  // optional
					message: 'Ready to rock', //required
				}
			}
		},

		shell: {
			deploy: {
				command: [
					'cd ' + buildPath,
					'parse deploy'
				].join('&&')
			}
		}

	});

	// Load our Node tasks, referenced in package.json
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-notify');

	grunt.loadNpmTasks('grunt-shell');

	// Our default task, eventually this will have tasks for different
	// enviroment release builds.
	grunt.registerTask('default', ['clean', 'compass', 'copy:main', 'notify:watch']);

	grunt.registerTask('deploy', ['clean', 'compass', 'copy:main', 'shell:deploy', 'notify:deploy']);

	grunt.registerTask('install', ['copy:install', 'clean', 'compass', 'copy:main', 'notify:install']);

};
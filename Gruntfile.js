module.exports = function (grunt) {
	grunt.initConfig({
		jade: {
			release: {
				files: {
					"www/index.html": "index.jade"
				}
			}
		},
		stylus: {
			compile: {
				options: {
					paths: ['stylus/']
				},
				files: [
					{expand: true, cwd: "stylus", src: ['**/*.styl'], dest: 'www/css', ext: ".css", filter: 'isFile'}
				]
			}
		},
		connect: {
			server: {
				options: {
					port: 8005,
					hostname: '*',
					middleware: function (connect) {
						return [
							require('connect-livereload')(),
							connect.static("./www")
						];
					}
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			build: {
				files: ['**/*.jade'],
				tasks: ['jade']
			},
			stylus: {
				files: ['stylus/**/*.styl'],
				tasks: ['stylus']
			}
		},
		open: {
			delayed: {
				path: 'http://localhost:8005',
				app: 'Google Chrome'
			}
		}
	})
	grunt.registerTask("default", ["jade", "stylus", "connect", "open", "watch"]);
}
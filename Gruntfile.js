module.exports = function (grunt) {
	grunt.initConfig({
		jade: {
			release: {
				files: {
					"www/index.html": "index.jade"
				}
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
			}
		},
		open: {
			delayed: {
				path: 'http://localhost:8005',
				app: 'Google Chrome'
			}
		}
	})
	grunt.registerTask("default", ["jade", "connect", "open", "watch"]);
}
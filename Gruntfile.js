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
							connect.static("./www")
						];
					}
				}
			}
		}
	})
	grunt.registerTask("default", ["jade", "connect"]);
}
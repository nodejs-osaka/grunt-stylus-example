module.exports = function (grunt) {
	grunt.initConfig({
		jade: {
			release: {
				files: {
					"www/index.html": "index.jade"
				}
			}
		}
	})
	grunt.registerTask("default", ["jade"]);
}
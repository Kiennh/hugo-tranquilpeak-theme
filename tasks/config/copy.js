module.exports = function(grunt) {
    grunt.config.set('copy', {
        js: {
            files: [{
                expand: true,
                cwd: 'node_modules/jquery/dist',
                src: 'jquery.js',
                dest: 'static/js'
            }, {
                expand: true,
                cwd: 'node_modules/fancybox/dist/js/',
                src: 'jquery.fancybox.js',
                dest: 'static/js'
            }]
        },
        css: {
            files: [{
                expand: true,
                cwd: 'node_modules/font-awesome/css/',
                src: 'font-awesome.css',
                dest: 'static/css'
            }, {
                expand: true,
                cwd: 'node_modules/fancybox/dist/css/',
                src: 'jquery.fancybox.css',
                dest: 'static/css'
            }]
        },
        font: {
            files: [{
                expand: true,
                cwd: 'node_modules/font-awesome/fonts/',
                src: '**',
                dest: 'static/fonts'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};

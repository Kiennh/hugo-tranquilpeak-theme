module.exports = function(grunt) {
  // Build (environment : production)
  grunt.registerTask('buildProd', [
    'clean:build',
    'copy',
    'bower:dev',
    'syncAssets',
    'replace:cssFancybox',
    'replace:cssTranquilpeak',
    'concat',
    'cssmin',
    'uglify',
    'linkAssetsProd'
  ]);
};

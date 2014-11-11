
global.errorMessage = '';

var gulp = require('gulp'),
    lint = require('./tilt-lint.js'),
    tgts = "gulpfile.js tilt-lint.js";

lint.gulpreg(gulp, { "targets" : tgts, "config" : './tilt-js-lint-rules.json' });
gulp.task('default', ['lint']);

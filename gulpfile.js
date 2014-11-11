
var gulp = require('gulp'),
    lint = require('./tilt-lint.js'),

    tgt  = "gulpfile.js tilt-lint.js";

lint.gulpreg(gulp, { "targets" : tgt, "config" : './tilt-js-lint-rules.json' });
gulp.task('default', ['lint']);

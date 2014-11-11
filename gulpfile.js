
var gulp = require('gulp'),
    lint = require('./tilt-lint.js'),
    tgts = "gulpfile.js tilt-lint.js",

    cfg  = { "targets" : tgts, "config" : './tilt-js-lint-rules.json' };

lint.gulpreg(gulp, cfg);
gulp.task('default', ['lint']);

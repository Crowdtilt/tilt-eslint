tilt-eslint
===========

Lets us centralize linting rules for ECMA dialects

[eslint](http://eslint.org/docs/rules/) has native 
[JSX support](https://github.com/eslint/eslint/issues/1291) on the way.





What's this for?
----------------

This is a simple centralization of [eslint](http://eslint.org/), allowing us to
keep a single javascript notation standard across projects moving forwards.  The
point is to make it trivial for us to all share the same rule set, from the same
repository, so that it's easier to do the right thing than to be lazy.





Example
-------

Tilt lint will register a task on the gulp instance you pass in, called `lint`
(unless you tell it otherwise,) which you may then use wherever as normal.  The
below is a complete, functional gulp file.

```javascript
var gulp = require('gulp'),
    lint = require('tilt-eslint');

lint.gulpreg(gulp, { "targets" : "gulpfile.js somefile.js lib/otherfile.jsx" });
gulp.task('default', ['lint']);
```

You will need the following dependency in your `package.json`:

```javascript
"dependencies": {
    "tilt-eslint": "git+ssh://git@github.com:Crowdtilt/eslint.git"
}
```

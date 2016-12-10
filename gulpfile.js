const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp
        .src([
            '../test_tmp/node/util.test.js',
            '../test/nodejs.test.js'
        ])
        .pipe(mocha({
            bail: true
        }))
        .once('end', function() {
            process.exit();
        });
});

var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var gif = require('gulp-if');

function stringEndsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function isScssFile(file) {
  return stringEndsWith(file.relative, 'scss');
}

var styleTransforms = lazypipe()
  .pipe(function () {
    return gif(isScssFile, sass());
  });


module.exports = {
  bundle: {
    main: {
      scripts: [
        './js/site.js'
      ],
      styles: [
        './scss/site.scss'
      ],
      options: {
        transforms: {
          styles: styleTransforms // pipe(s) of style transforms
        },
        rev: false
      }
    },
    vendor: {
      scripts: [
        './node_modules/simple-jekyll-search/dest/simple-jekyll-search.min.js',
        './node_modules/highlight.js/lib/highlight.js',
      ],
      styles: [
        './node_modules/highlight.js/styles/monokai.css'
      ],
      options: {
        transforms: {
          styles: styleTransforms // pipe(s) of style transforms
        },
        rev: false
      }
    }
  }
};
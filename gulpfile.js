'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mqpacker = require('css-mqpacker');


gulp.task('styles', function () {

  var plugins = [
    pxtorem({
      rootValue: 16,
      unitPrecision: 3,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    }),
    precss(),
    autoprefixer(),
    mqpacker(),
    cssnano()
  ]

  return gulp.src('source/css/style.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build/css/'))
});
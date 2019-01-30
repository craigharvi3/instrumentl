'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.config');
var webpackProdConfig = require('./webpack.production.config');
var gutil = require("gulp-util");
var del = require('del');
var config = {
	sass: {
		input: './app/sass/**/*.scss',
		output: './dist/css'
	},
	img: {
		input: './app/img/**/*',
		output: './dist/img'
	},
  js: {
    input: './app/**/',
    output: './dist/js'
  },
  fonts: {
    input: './app/fonts/**/*',
    output: './dist/fonts'
  },
  css: {
    input: './app/css/**/*',
    output: './dist/css'
  }
}

// Front end bundling


// Client-side listen react app webpack task
gulp.task('webpack-client:dev', function(done) {
  return webpack(webpackDevConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack-client:build", err);
    gutil.log("[webpack-client:dev]", stats.toString({
      colors: true
    }));
    done();
  });
});

// Production client-side listen react app webpack task
gulp.task('webpack-client:production', function(done) {
  // modify some webpack config options
  webpackProdConfig.plugins = webpackProdConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    })
  );

  return webpack(webpackProdConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack-client:production", err);
    gutil.log("[webpack-client:production]", stats.toString({
      colors: true
    }));
    done();
  });
});

gulp.task('clean:js', function() {
  return del([
    config.js.output
  ]);
});

gulp.task('clean:img', function() {
  return del([
    config.img.output
  ]);
});

gulp.task('clean:fonts', function() {
  return del([
    config.fonts.output
  ]);
});

gulp.task('clean:css', function() {
  return del([
    config.css.output
  ]);
});


gulp.task('webpack:dev', gulp.series(['clean:js', 'webpack-client:dev']));
gulp.task('webpack:production', gulp.series(['clean:js', 'webpack-client:production']));


gulp.task('sass', function () {
  return gulp.src(config.sass.input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.output));
});

gulp.task('copy:fonts', () => {
  return gulp.src(config.fonts.input)
    .pipe(gulp.dest(config.fonts.output));
});

gulp.task('copy:css', () => {
  return gulp.src(config.css.input)
    .pipe(gulp.dest(config.css.output));
});

gulp.task('copy:img', function () {
  return gulp.src(config.img.input)
    .pipe(gulp.dest(config.img.output));
});

gulp.task('clean', gulp.series(['clean:img', 'clean:fonts', 'clean:css']));
gulp.task('copy', gulp.series(['clean', 'copy:img', 'copy:fonts', 'copy:css']));

// gulp.task('watch', function () {
//   gulp.watch(config.sass.input, gulp.series('sass'));
// });

gulp.task('watch', function() {
  gulp.watch([config.js.input + '*.js', config.js.input + '*.jsx'], gulp.series(['webpack:production']));
  gulp.watch(config.sass.input, gulp.series(['sass']));
});

gulp.task('ci', gulp.series(['copy', 'sass', 'webpack:production']))

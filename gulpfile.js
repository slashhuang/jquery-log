var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var Server = require('karma').Server;
var demoWebpackConfig = require('./webpack/demo.config');
var webpackConfig = require('./webpack/webpack.config');
var WebpackDevServer = require("webpack-dev-server");
var open = require('gulp-open');

var babel = require('gulp-babel');

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('open', function () {
  gulp.src(__filename)
      .pipe(open({uri: "http://127.0.0.1:8081/webpack-dev-server/example/index.html"}));
});

gulp.task('demo-webpack', function(done) {
  var config=Object.create(demoWebpackConfig);
  config.entry.unshift(
      "webpack-dev-server/client?http://localhost:8081/",
      'webpack/hot/dev-server'//语法错误，也reload
  );
    //开发环境添加react-hot
  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
    hot: true,
    filename: config.output.publicPath.filename+".js",
    publicPath: config.output.publicPath,
    stats: { colors: true }
  });
  server.listen(8081,'localhost',function(err){
      if (err) {
          return console.error(err);
      }
      console.log('============ 热刷新已监听8081端口 =============')
  });
});

gulp.task('require-webpack', function(done) {
        webpack(webpackConfig).run(function(err) {
            if(err) throw new gutil.PluginError("require-webpack", err);
            done();
        });
});

gulp.task('example-webpack',function(done){
        webpack(demoWebpackConfig).run(function(err) {
        if(err) throw new gutil.PluginError("require-webpack", err);
        done();
    });
});

gulp.task('babel', function(done){
  return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

gulp.task('default', ['babel','require-webpack','example-webpack']);
gulp.task('test',['karma']);
gulp.task('demo', ['demo-webpack','open']);

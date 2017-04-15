var gulp = require("gulp");
var $ = require("gulp-load-plugins")(); //加载模块
var open = require("open");

//用来定义目录路径
var app = {
    srcPath: "src/",
    devPath: "build/", //整合之后的文件
};

// //拷贝文件
gulp.task("jslib", function() {
    //读取文件
    gulp.src(app.srcPath + 'js/*.js')
        //pipe链式调用，拷贝文件dest();
        .pipe(gulp.dest(app.devPath + 'js/vendor'))
        .pipe($.connect.reload())
});

gulp.task('html', function() {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe($.connect.reload())
});

//$.cssmin()压缩css文件
gulp.task('css', function() {
    gulp.src(app.srcPath + 'css/*.css')
        .pipe($.concat('index.css'))
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe($.connect.reload())
});
gulp.task('csslib', function() {
    gulp.src(app.srcPath + 'css/vendor/*.css')
        .pipe(gulp.dest(app.devPath + 'css/vendor'))
        .pipe($.cssmin())
        .pipe($.connect.reload())
});

//$.concat('index.js')合并js文件生成一个index.js文件
//$.uglify()压缩
gulp.task('js', function() {
    gulp.src(app.srcPath + 'app/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe($.connect.reload())
});

gulp.task("image", function() {
    gulp.src(app.srcPath + 'images/*')
        .pipe(gulp.dest(app.devPath + 'images'))
        .pipe($.imagemin())
        .pipe($.connect.reload())
});
gulp.task("fonts", function() {
    gulp.src(app.srcPath + 'fonts/*')
        .pipe(gulp.dest(app.devPath + 'css/fonts'))
        .pipe($.connect.reload())
});
gulp.task('build', ['image', 'js', 'jslib', 'css', 'csslib', 'html', 'fonts']);

gulp.task('clean', function() {
    gulp.src([app.devPath])
        .pipe($.clean());
});

gulp.task('serve', ['build'], function() {
    $.connect.server({
        root: [app.devPath],
        livereload: true, //针对高级浏览器
        port: 88
    });
    open('http://localhost:88');


    gulp.watch(app.srcPath + 'app/*.js', ['js'])
    gulp.watch(app.srcPath + 'js/vendor/*.js', ['jslib'])
    gulp.watch(app.srcPath + 'css/*.css', ['css'])
    gulp.watch(app.srcPath + 'css/vendor/*.css', ['csslib'])
    gulp.watch(app.srcPath + 'images/*', ['image'])
    gulp.watch(app.srcPath + '**/*.html', ['html'])
    gulp.watch(app.srcPath + 'fonts/*', ['fonts'])
});

gulp.task('default', ['serve']);

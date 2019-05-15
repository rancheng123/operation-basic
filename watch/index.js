var srcDir = '/Users/deo/WebstormProjects/workPlace/businessDir/operation-basic/';
var distDir = '/Users/deo/WebstormProjects/workPlace/businessDir/operation/node_modules/@operation/basic/';

var controlDirOrFile = [
    srcDir + 'lib/**/*.*',
    srcDir + 'index.js',
    srcDir + 'package.json',
]

var gulp = require('gulp');


//测试  start
global.gulp = gulp;
global.srcDir = srcDir;
global.distDir = distDir;
var watcher =gulp.watch(controlDirOrFile);
watcher.on('change', function(event) {
});
return;

gulp.src(srcDir + 'lib/js/asset/index.js')
    .pipe(gulp.dest(  distDir + 'lib/js/asset/index.js'  ))

//测试  end



var fs = require('fs'); // 引入fs模块

function deleteall(path) {
    var files = [];
    if(fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteall(distDir);








var watcher =gulp.watch(controlDirOrFile);

watcher.on('change', function(event) {
    debugger
    compileStaticSource();
});

compileStaticSource();

//编译静态资源
function compileStaticSource(){
    console.log('  --编译开始')
    gulp.src(controlDirOrFile)
        .pipe(gulp.dest(distDir));
    console.log('  --编译结束')

}





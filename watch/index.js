var gulp = require('gulp');
var watch = require('gulp-watch');
var fs = require('fs');

var srcDir = '/Users/deo/WebstormProjects/workPlace/operation-basic/';
var distDir = '/Users/deo/WebstormProjects/workPlace/businessDir/operation/node_modules/@operation/basic/';


//测试  start
/*global.gulp = gulp;
global.srcDir = srcDir;
global.distDir = distDir;*/
//测试  end




var controlDirOrFile = [
    srcDir + 'lib/',
    srcDir + 'index.js',
    srcDir + 'package.json',
]


//替换所有文件  start
var count= 0;
for(var item of controlDirOrFile){
    walkDir(item,(curPath)=>{
        singleEmit({
            filePath: curPath,
            srcDir: srcDir,
            distDir: distDir
        })
        count ++
    });
}
console.log(' 替换了'+count + '个文件')
//替换所有文件  end




//监控所有文件  start
controlDirOrFile = controlDirOrFile.map((ele,i)=>{
    if(fs.statSync(ele).isDirectory()) {
        //目录需要补充gulp语法
        ele = ele + '**/*.*'
    };
    return ele
})




watch(controlDirOrFile, function (obj) {
    singleEmit({
        filePath: obj.history[0],
        event: obj.event,
        srcDir: srcDir,
        distDir: distDir,
    })
});
//监控所有文件  end



//替换文件
function singleEmit(opts){
    var arr = opts.filePath.replace(opts.srcDir,'').split('/');
    arr.pop();

    var originFile = opts.filePath;
    var targetFile = opts.distDir + opts.filePath.replace(opts.srcDir,'');
    var targetDir = opts.distDir + arr.join('/');



    if(opts.event == 'change' || opts.event == 'add'){
        gulp.src(originFile)
            .pipe(gulp.dest( targetDir ));

        if(opts.event == 'change'){
            console.log('文件 '+ targetFile + '已替换')
        }else{
            console.log('文件 '+ targetFile + '已添加')
        }



    }else if(opts.event == 'unlink'){
        fs.unlinkSync(targetFile);

        console.log('文件 '+ targetFile + '已删除')
    }





}


//遍历目录所有文件
function walkDir(path,onWalkFile){
    if(fs.existsSync(path)) {


        if(fs.statSync(path).isDirectory()) {
            var files = fs.readdirSync(path);
            files.forEach(function(file, index) {
                var curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()) {
                    walkDir(curPath,onWalkFile);
                } else { // delete file
                    onWalkFile(curPath);
                }
            });
        } else {
            onWalkFile(path);
        }



    }else{
        console.log('路径不存在')
    }
}

return;























var fs = require('fs'); // 引入fs模块

function deleteall(path) {
    if(fs.existsSync(path)) {
        var files = fs.readdirSync(path);
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






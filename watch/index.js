var gulp = require('gulp');
var staticSource = [
    '/Users/deo/WebstormProjects/workPlace/businessDir/operation-basic/lib/**/*.*',
    '/Users/deo/WebstormProjects/workPlace/businessDir/operation-basic/index.js'
];
var dist = '/Users/deo/WebstormProjects/workPlace/businessDir/operation/node_modules/@operation/basic/'

var watcher =gulp.watch(staticSource, function(){
    compileStaticSource();
});

watcher.on('change', function(event) {
    compileStaticSource();
});


//编译静态资源
function compileStaticSource(){
    console.log('  --编译开始')
    gulp.src(staticSource)
        .pipe(gulp.dest(dist));
    console.log('  --编译结束')

}
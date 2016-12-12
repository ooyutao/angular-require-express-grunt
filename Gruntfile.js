module.exports = function (grunt) {
    //配置编码
    grunt.file.defaultEncoding = 'utf-8';
    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),

        //压缩js
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            builda: {//任务一：压缩a.js，不混淆变量名，保留注释，添加banner和footer
                options: {
                    mangle: false, //不混淆变量名
                    preserveComments: false, //删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    //footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'web/js/controllers/',
                        src: '**/*.js',
                        //src: ['**/*.js', '!**/*.min.js'],  //不包含某个js,某个文件夹下的js
                        dest: 'web/app/controllers/'
                    },
                    {
                        expand: true,
                        //相对路径
                        cwd: 'web/js/config/',
                        src: '*.js',
                        dest: 'web/app/config/'
                    },
                    {
                        expand: true,
                        //相对路径
                        cwd: 'web/js/services/',
                        src: '*.js',
                        dest: 'web/app/services/'
                    }
                ]
            }
        },

        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'web/css/style/',
                        src: ['*.css'],
                        dest: 'web/css/min/'
                    }
                ]
            }
        },

        watch: {
                scripts: {
                    files: ['web/js/**/*','web/js/**/**/*','web/css/style/*.css'],
                    tasks: ['uglify','cssmin']
                }
            }



    });



    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认执行的任务
    grunt.registerTask('default', ['uglify','cssmin','watch']);

};

# thinking-react-native
This is some of my own to react-native learning footprint and some of his own record

##  Windows环境下React Native环境配置详解
* 操作系统是Windows7 Ultimate（旗舰版）64位
    * 一：安装Python(已安装有的可以跳过)
        * [官网下载](https://www.python.org/downloads/)</br>
        >* 下载2.7.13，有些本可能需要2.7.11，3.X以上React Native不支持。</br>

        * 环境变量配置：
        >* 1、在系统变量中添加：PYTHON_HOME，值：C:\Python27 (这个是自己的安装目录)</br>
        >* 2、在系统变量Path中添加两个变量值：%PYTHON_HOME%;%PYTHON_HOME%\Scripts</br>
        
        * 验证是否安装成功：python --version</br>
    * 二：安装git(推荐git-for-Windows的)
        * [官方下载](https://git-for-windows.github.io/)
        * 安装步骤：
        >* 1、选择 Use a TrueType font in all console windows
        >* 2、选择 Windows Command Prompt
        >* 3、选择 Checkout Windows-style,commit Unix-style line endings
        >* 4、选择 Use Windows default console window
        >* 5、全选(有的第二个Enable Git Credendialc Manager是灰色的就不理它了)

        * 环境变量自动添加到path，验证是否安装成功：git --version
    * 三、配置android环境
        * [官网下载](http://developer.android.com/sdk/index.html)
        * 安装步骤：(忽略，自行百度，下一步下一步...)
        * 环境变量配置：
        
        >* 1、在系统变量中添加：ANDROID_HOME，值：D:\sdk (这个是自己的sdk所在目录)</br>
        >* 2、在系统变量Path中添加两个变量值：%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
    * 四、安装C++环境:
        * 首先查看自己计算机是否已经安装有Microsoft Visual C++ xxx Redistributable运行库,xxx为2013版本或者2015版本
        * 1、微软官方下载地址：
        >* [2013版本](http://www.microsoft.com/zh-CN/download/details.aspx?id=40784)
        >* [2015版本](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

        >* 2、安装步骤：（忽略，下一步下一步...）
        >* 3、可选项：(安装Visual C++ Build Tools 或者 Visual Studio 2015，推荐前者，后者包太大了！！！)
        >* 安装前提：.NET Framework 4.5.1 需要最低版本是4.5.1（控制面板卸载程序可看）</br>
        >>* [官网下载](http://landinghub.visualstudio.com/visual-cpp-build-tools)Visual C++ Build Tools</br>
        >>* [官网下载](https://www.visualstudio.com/products/visual-studio-community-vs) Visual Studio 2015</br>
        >>* [官网下载](https://www.microsoft.com/en-us/download/details.aspx?id=40773).NET Framework 4.5.1</br>

        * 4、如果可选项安装了，这步需要配置：
        >>* 命令行输入(注意是两条命令，分别输入)：
        >>* npm install -g node-gyp
        >>* npm config set msvs_version 2015

        * 5、说明：gyp ERR 错误和 Windows_NT 6.1.7601 可执行步骤3和4，[详情请看](https://github.com/nodejs/node-gyp#installation)
    * 五、安装Nodejs
        * [官网下载](http://nodejs.cn/download/)
        * 安装步骤：（忽略，自行百度，下一步下一步...）
        >* 1、环境变量自动添加到path，验证是否安装成功：node -v
        >* 2、配置国内淘宝镜像(墙的存在)：

        * 命令行输入(注意是两条命令，分别输入)：
        >>* npm config set registry https://registry.npm.taobao.org --global
        >>* npm config set disturl https://npm.taobao.org/dist --global

        * 3、配置python版本
        >* 命令行输入：npm config set python python2.7
    * 六、安装React Native命令行
        >* [官网下载](https://github.com/facebook/react-native)
        >* 完成之后解压，进入文件目录react-native/react-native-cli下</br>

        * 按住Shift键右键打开命令行窗口，命令行输入：npm install -g react-native-cli
        * 验证是否安装成功：react-native -v
    * 七、创建自己的React Native项目

        >* 1、想在哪里创建项目就在哪儿按住Shift键右键打开命令行窗口，命令行输入：react-native init HelloWorld</br>
        >* 2、说明：HelloWorld为自己的项目名，自拟，创建工程时间较长，耐心等待，首次创建可能需要下载gradle2.4文件还有jcenter等等依赖库（自备梯子）</br>

    * 八、运行Packager Server
        >* 1、命令行cd进入自己的工程(HelloWorld)目录或者直接进入(需要按住Shift键右键打开命令行窗口),输入命令：react-native start
        >* 2、说明：Packager包服务要一直开启</br>

    * 九、运行自己的React Native项目
        >* 1、命令行cd进入自己的工程(HelloWorld)目录或者直接进入(需要按住Shift键右键打开命令行窗口),输入命令：react-native run-android
        >* 2、说明：期间有可能会报一些error，也有可能不会出现

    * 十、常见错误解决方案(十全十美,欢迎楼下补充...)
        * 待续...</br>


## React Native屏幕适配
    * 正在写...
# thinking-react-native
This is some of my own to react-native learning footprint and some of his own record

## 内容目录

- React Native 环境安装
  - [Windows环境下React-Native环境配置详解](#windows环境下React-Native环境配置详解)
  - [Mac环境下React-Native环境配置详解](#Mac环境下React-Native环境配置详解)
  - [管理React-Native库的版本](#管理React-Native库的版本)
  - [脚本命令实现Android模拟器弹出React-Native调试悬浮窗](#脚本命令实现Android模拟器弹出React-Native调试悬浮窗)
- React Native IDE开发工具
  - [WebStorm之React-Native开发环境配置](#WebStorm之React-Native开发环境配置)
  - [Visual-Studio-Code之React-Native开发环境配置](#Visual-Studio-Code之React-Native开发环境配置)
  - [Sublime之React-Native开发环境配置](#Sublime之React-Native开发环境配置)
- React Native 屏幕适配
  - [react-native-screen-adapter](#react-native-screen-adapter)
- React Native 生命周期
  - [九个生命周期一个组件渲染及其讲解](#九个生命周期一个组件渲染及其讲解)
- React Native 布局篇
  - [FlexBox盒子模型及布局](#FlexBox盒子模型及布局)
- React Native 动画篇
  - [动画文档详解](#动画文档详解)
- React Native 学习资料
  - [文档类](#文档类)
  - [组件类](#组件类)
  - [专题类](#专题类)
  - [语法类](#语法类)
  - [布局类](#布局类)
  - [架构类](#架构类)
  - [工具类](#工具类)
  - [学习提纲](#学习提纲)
- React Native 小功能
  - [style的三种写法](#style的三种写法)
  - [绑定this的三种方式](#绑定this的三种方式)
  - [Navigator路由配置和重写物理Back键的简单封装](#navigator路由配置和重写物理Back键的简单封装)
  - [访电商客户端首页顶部滑动菜单](#访电商客户端首页顶部滑动菜单)
  - [强制隐藏软键盘](#强制隐藏软键盘)
  - [React-Native引入第三方组件链接库导入配置技巧](#React-Native引入第三方组件链接库导入配置技巧)
  - [混合开发之Android篇](#混合开发之Android篇)
  - [轮播图的简单实现](#轮播图的简单实现)
  - [视频播放的简单实现](#视频播放的简单实现)
  - [动态改变组件style样式](#动态改变组件style样式)


## React Native环境安装
###  Windows环境下React Native环境配置详解

  - **操作系统是Windows7 Ultimate（旗舰版）64位**

    - **一：安装Python(已安装有的可以跳过)**
        1. [官网下载](https://www.python.org/downloads/)
            * 下载2.7.13，有些本可能需要2.7.11，3.X以上React Native不支持。
        1. 环境变量配置：
            * 1、在系统变量中添加：PYTHON_HOME，值：C:\Python27 (这个是自己的安装目录)
            * 2、在系统变量Path中添加两个变量值：%PYTHON_HOME%;%PYTHON_HOME%\Scripts
        1. 验证是否安装成功：`python --version`

    - **二：安装git(推荐git-for-Windows的)**
        1. [官方下载](https://git-for-windows.github.io/)
        1. 安装步骤：
            * 选择 Use a TrueType font in all console windows
            * 选择 Windows Command Prompt
            * 选择 Checkout Windows-style,commit Unix-style line endings
            * 选择 Use Windows default console window
            * 全选(有的第二个Enable Git Credendialc Manager是灰色的就不理它了)
        1. 环境变量自动添加到path，验证是否安装成功：`git --version`

    - **三、配置android环境**
        1. [官网下载](http://developer.android.com/sdk/index.html)
        1. 安装步骤：(忽略，自行百度，下一步下一步...)
        1. 环境变量配置：
            * 在系统变量中添加：ANDROID_HOME，值：D:\sdk (这个是自己的sdk所在目录)
            * 在系统变量Path中添加两个变量值：%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

    - **四、安装C++环境**
        1. 首先查看自己计算机是否已经安装有Microsoft Visual C++ xxx Redistributable运行库,xxx为2013版本或者2015版本
        1. 微软官方下载地址：
            * [2013版本](http://www.microsoft.com/zh-CN/download/details.aspx?id=40784)
            * [2015版本](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
        1. 安装步骤：（忽略，下一步下一步...）
        1. 可选项：(安装Visual C++ Build Tools 或者 Visual Studio 2015，推荐前者，后者包太大了！！！)
            * 安装前提：.NET Framework 4.5.1 需要最低版本是4.5.1（控制面板卸载程序可看）
                * [官网下载](http://landinghub.visualstudio.com/visual-cpp-build-tools)Visual C++ Build Tools
                * [官网下载](https://www.visualstudio.com/products/visual-studio-community-vs) Visual Studio 2015
                * [官网下载](https://www.microsoft.com/en-us/download/details.aspx?id=40773).NET Framework 4.5.1
        1. 如果可选项安装了，这步需要配置：
        1. 命令行输入(注意是两条命令，分别输入)：
            * `npm install -g node-gyp`
            * `npm config set msvs_version 2015`
        1. 说明：gyp ERR 错误和 Windows_NT 6.1.7601 可执行步骤3和4，[详情请看](https://github.com/nodejs/node-gyp#installation)

    - **五、安装Nodejs**
        1. [官网下载](http://nodejs.cn/download/)
        1. 安装步骤：（忽略，自行百度，下一步下一步...）
            * 环境变量自动添加到path，验证是否安装成功：`node -v`
            * 配置国内淘宝镜像(墙的存在)：
        1. 命令行输入(注意是两条命令，分别输入)：
             * `npm config set registry https://registry.npm.taobao.org --global`
             * `npm config set disturl https://npm.taobao.org/dist --global`
        1. 配置python版本
            * 命令行输入：`npm config set python python2.7`

    - **六、安装React Native命令行**
        1. [官网下载](https://github.com/facebook/react-native)
            * 完成之后解压，进入文件目录react-native/react-native-cli下
        1. 按住Shift键右键打开命令行窗口，命令行输入：`npm install -g react-native-cli`
        1. 验证是否安装成功：`react-native -v`

    - **七、创建自己的React Native项目**
        1. 想在哪里创建项目就在哪儿按住Shift键右键打开命令行窗口，命令行输入：`react-native init HelloWorld`
        1. 说明：HelloWorld为自己的项目名，自拟，创建工程时间较长，耐心等待，首次创建可能需要下载gradle2.4文件还有jcenter等等依赖库（自备梯子）

    - **八、运行Packager Server**
        1. 命令行cd进入自己的工程(HelloWorld)目录或者直接进入(需要按住Shift键右键打开命令行窗口)，输入命令：`react-native start`
        1. 说明：Packager包服务要一直开启

    - **九、运行自己的React Native项目**
        1. 命令行cd进入自己的工程(HelloWorld)目录或者直接进入(需要按住Shift键右键打开命令行窗口)，输入命令：`react-native run-android`
        1. 说明：期间有可能会报一些error，也有可能不会出现

    - **十、常见错误解决方案(十全十美，期待高手来加入补充...)**
        * 待续...


### Mac环境下React-Native环境配置详解

  - **一、安装Homebrew**
    * Homebrew是Mac OS X的套件(包)管理器，我们可以通过它获取并且安装很多组件。
    * 命令行输入：`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    * 注意事项：在Mac OS X 10.11（El Capitan)版本中，homebrew在安装软件时可能会碰到/usr/local目录不可写的权限问题。可以使用下面的命令修复
      * 命令行输入：`sudo chown -R `whoami` /usr/local`

  - **二、安装npm和Node.js**
    * Node.js最好安装4.0及其以上更高的版本，node安装成功后npm自动也就有了。
    * 命令行输入：`brew install node`

  - **三、安装WatchMan**
    * 该插件用于监控bug文件和文件变化，并且可以触发指定的操作。
    * 命令行输入：`brew install watchman`

  - **四、安装Flow(可选)**
    * flow是一个javascript的静态类型查看器，建议安装它，以方便找出代码中的类型错误。
    * 命令行输入：`brew install flow`

  - **五、安装npm国内镜像(可选)**
    * 命令行输入：`npm config set registry https://registry.npm.taobao.org --global`
    * 命令行输入：`npm config set disturl https://npm.taobao.org/dist --global`
 
  - **六、安装React Native**
    * 命令行输入：`npm install -g react-native-cli`

  - **七、iOS开发环境需求**
    * Xcode7及其以上更高版本

  - **八、Android开发环境需求**
    1. 安装最新版(JDK8.0及其以上更高的版本)的JDk：http://www.oracle.com/technetwork/java/javase/downloads/index.html
       所有版本的JDK下载地址：http://www.oracle.com/technetwork/java/archive-139210.html 

    1. 强行插入：建议直接安装Android Studio，以下2、3、4步骤即可忽略。

    1. 安装Android SDK，命令行输入：`brew install android-sdk`

    1. 定义ANDROID_HOME环境变量，确保ANDROID_HOME环境变量指向你已经安装的Android SDK目录：前往电脑的`~/.bashrc,~/.bash_profile`或者你终端所用的其他配置文件中增加一下内容：
        * 如果你是通过Homebrew安装的SDK的，则加入以下路径
        `export ANDROID_HOME=/usr/local/opt/android-sdk`
        * 否则加入以下路径
        `export ANDROID_HOME=~/Library/Android/sdk`

    1. 配置SDK，打开Android SDK Manager(Mac用户在终端下输入android)，选中以下项目：
        * `Android SDK Build-tools version 23.0.1(这个必须版本严格匹配23.0.1)`
	    * `Android 6.0(API 23)`
	    * `Local Maven repository for Support Libraries(之前叫做Android Support Repository)`
	    * 最后点击"install Packages"

    1. 创建Android模拟器(Android API版本4.1及其以上),建议使用genymotios模拟器，使用这个模拟器需要安装一个VirtualBox虚拟机，创建模拟器需要注册一个自己的帐号。

  - **九、初始化项目**
    * 命令行输入：`react-native init xxx(项目名称)`

  - **十、运行项目到ios客户端**
    * 方法一：命令行输入：`react-native start(或者npm start)`，注意这个是包服务，不可关闭。
          command + N 新建一个新的终端窗口，命令行输入: `react-native run-ios`
    * 方法二：ios目录下用Xcode直接打开工程，运行即可(会自动执行方法一中的两句命令)。

  - **十一、运行项目到Android客户端**
    * 命令行输入：`react-native start(或者npm start)`，注意这个是包服务，不可关闭。
     command + N 新建一个新的终端窗口，命令行输入: `react-native run-android`


### 管理React-Native库的版本
  
  - **一、查看本地的React Native的版本**
    * 方法一：命令行输入：`react-native --version`
    * 方法二：项目目录下package.json文件里的dependencies节点下可以查看

  - **二、更新本地的React Native的版本**
    * 命令行输入：`npm update -g react-native-cli`

  - **三、查询react-native的npm包最新版本**
    * NPM的全称是NOde Package Manager，是一个Node.js包管理和分发工具，已经成为了非官方的发布Node模块(包)的标准。
    * npm包的地址：https://www.npmjs.com/package/react-native
	* 命令行查询： `npm info react-native`

  - **四、升级或者降级npm包的版本**
    命令行输入：`npm install --save react-native@0.32.0`

  - **五、更新项目的templates文件(可选)**
    * 新的npm包会包含更新在运行reac-native init命令生成的一些动态文件，例如init创建项目的时候会生成iOS和Android，
     的子项目，我们可以通过以下的命令进行获取到最新的代码
    * 命令行查询：`react-native upgrade`


### 脚本命令实现Android模拟器弹出React-Native调试悬浮窗
  * 说明：该方法只适用于Windows环境下
    * 新建一个txt文本文件
    * 在文件中写入以下内容

      ```dos
        @echo off
        adb shell input keyevent 82
        pause
      ```
      
    * 另存为`.bat`文件
    * 在项目运行之后，需要调出悬浮窗Reload重新刷新时，双击这个脚本就可以打开悬浮窗了
    * 当然你也可以直接使用快捷键Ctrl + M


## React Native IDE开发工具
### WebStorm之React-Native开发环境配置

  - **WebStorm下载地址**
    * [官方下载](http://www.jetbrains.com/webstorm/)
    * [Mac Crack版](http://xclient.info/)

  - **安装以及Crack**

    1.license server注册方式
      * 这里提供几个
        * http://idea.imsxm.com/
        * http://114.215.133.70:41017
        * 如果都不行可以看这个：http://0.idea.lanyus.com

    2.补丁方式
      * [具体方法请看Mac Crack版中的子文件](http://xclient.info/)

    3.修改计算机本地时间
      * 由于试用是30天，安装的时候可以先将本地时间修改为未来的某个时间，安装完成之后再修改回来，以达到延长使用的目的。

  - **开发环境配置**

    1.智能代码补全提醒插件
      * [github下载以及安装使用说明](https://github.com/virtoolswebplayer/ReactNative-LiveTemplate)
      * 我自己修改了这个插件，补充了不少没有的API，需要的可以在自行下载，文件在资源目录里[源文件](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/LiveTemplates)
      * 部门图文讲解使用教程<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/newRN.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/style.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/defaultPrpps.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/liveTemplates01.png)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/liveTemplates02.png.gif)<br/>
      * 注意事项
          * 写样式的时候，首先按下`command + j(Mac系统),Ctrl + j(Windows系统)`, 然后输入属性名的首字母，如输入bor 自动提示 borderColor, borderWidth, .....
          * 写组件标签的时候记住的可以直接写名称，然后按Tab(制表符)键，即可生成对
          * 不记住的直接输入首字母即可有提示，修改模版可以参照上边的gif图演示

    2.库文件添加
      * 详细流程以及需要下载的库<br/>
      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/Libraries.png)

    3.语法选择
      * React Native使用的是JSX语法<br/>
      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/Javascript.png)<br/>
      

### Visual-Studio-Code之React-Native开发环境配置

  - **Visual Studio Code下载地址**
    * [微软官方下载](https://code.visualstudio.com/Download)

  - **开发环境配置**
    1. 安装React-Native开发相关的扩展插件
        * 软件界面左边栏应用商店中搜索以下扩展插件安装即可<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/Visual-Studio-Code01.png)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/Visual-Studio-Code02.png)

    1. 若安装之后没有提示则按以下教程操作
        * [Visual Studio Code之React-Native代码智能提示](https://besttao.github.io/2016/10/25/%E4%BD%BF%E7%94%A8VSCode%E5%BC%80%E5%8F%91React-Native%E7%9A%84%E6%AD%A3%E7%A1%AE%E5%A7%BF%E5%8A%BF/)
        
    1. 部分使用教程
        * gif图演示<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/smart01.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/smart02.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/smart03.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/smart04.gif)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/smart05.gif)

        * 其他设置参考扩展插件中的使用以及配置,设置通过菜单栏文件→首选项→用户设置，在setting.json中设置保存即可。


### Sublime之React-Native开发环境配置

  - **Sublime下载地址**
    * [官方下载](http://www.sublimetext.com/3)

  - **开发环境配置**
    1. 安装React-Native开发相关的扩展插件
        * [把SublimeText配置成ReactNative的IDE](http://www.jianshu.com/p/bbb2e998a2e2)
        * [Sublime Text常用插件总结及Package Control安装方法](http://9iphp.com/web/html/1260.html)
        * [sublime text 3 插件推荐](https://www.zhihu.com/question/24736400)
    1. 插件如下，其中有JQuery和HTML5是我个人自己添加的。
        * 图片展示<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/sublime01.png)
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/sublime02.png)<br/>
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/sublime03.png)
        ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ResourceFile/ImageResource/sublime04.png)<br/>


## React Native屏幕适配
### react-native-screen-adapter

  - **前言**
    1. 使用尺寸适配，拷贝ScreenAdapter文件夹下的Transform.js文件到自己项目下即可使用。
    1. 注意：需要根据自己的切图基准改动两个值，见下面函数说明。

  - **可用平台**
    1. IOS
    1. Android

  - **使用方法**
    1. 在style样式中
    1. 例如：设置View的高度为150px(切图上的px值)

      ```javascript
      //导入
      import p from '../utils/Transform';

      class ScreenAdapterExample extends Component {

          //构造函数
          constructor(props) {
              super(props);
              // 初始状态
              this.state = {
                  ...
              }
          }

          render() {
              return (
                  <View style={styles.container}>
                  </View>
              );
          }
      }

      //样式中使用
      const styles = StyleSheet.create({
          container: {
              ...
              height: p(132)
          }
      });
      ```

    * 参考文档详情查看[CSDN博客](http://blog.csdn.net/zhaoyw2008/article/details/46008513)
    * React Native[自适应布局方案](https://segmentfault.com/a/1190000004878644)

  - **Transform.js解析**
    1. photo
    1. code

      ```javascript
      function p(n) {
          const deviceWidth = Dimensions.get('window').width;
          return Math.round((n / 3) * (PixelRatio.getPixelSizeForLayoutSize(deviceWidth) / PixelRatio.get()) / 360);
      }
      ```

  - **p函数说明**
    1. n: UI給的切图上的px值，也就是像素值
    1. 3：设备的dpi，也就是设备的像素密度等级，固定值(UI切图基准设备的dpi)
    1. 360: 设备的宽逻辑尺寸(dp单位)，详情见上面的CSDN博客

    * 函数图文讲解
    ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ScreenAdapter/imgs/a.png)
    * 不同设备的dpi计算值
    ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ScreenAdapter/imgs/b.png)
    * Android设备屏幕信息表
    ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/ScreenAdapter/imgs/c.png)

    * [React Native官网](http://facebook.github.io/react-native/docs/pixelratio.html#content)
    * [CSDN博客](http://blog.csdn.net/zhaoyw2008/article/details/46008513)


## React Native 生命周期
### 九个生命周期一个组件渲染及其讲解

  - **getDefaultProps**
    * 注意：ES6写法

    ```javascript
      static get defaultProps() {
          return {
              key: 'value'
          };
      }
    ````

    * 在组件创建之前，会先调用这个方法，全局调用一次。

  - **getInitialState**
    * 注意：ES6写法

    ```javascript
      class Video extends Component {
        constructor(props){
            super(props);
            this.state = {
                loopsRemaining: this.props.maxLoops,
            };
        }
      }
    ```

    * 初始化状态值，可用于改变组件状态

  - **componentWillMount**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentWillMount() {

          }
      }
    ```
    
    * 在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。可以在这里做一些业务初始化操作，也可以设置组件状态。这个函数在整个生命周期中只被调用一次。

  - **render**
    * 注意: ES6写法

    ```javascript
      class Photo extends Component {
          render() {
              return (
                  <Image source={this.props.source} />
              );
          }
      }
    ```
      
    * 组件渲染，并返回JSX或其他组件来构成DOM。

  - **componentDidMount**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentDidMount() {

          }
      }
    ```
    * 初始渲染完成立即调用此函数(只执行一次)

  - **componentWillReceiveProps**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentWillReceiveProps(nextProps, nextContext) {

          }
      }
    ```

    * 初始渲染完成，组件接收到新的props时调用此函数

  - **shouldComponentUpdate**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          shouldComponentUpdate(nextProps, nextState) {
              return true; //默认返回true
          }
      }
    ```

    * 初始渲染完成，组件接收到新的props或者state重新渲染之前，调用该函数

  - **componentWillUpdate**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentWillUpdate(nextProps, nextState) {
              
          }
      }
    ```

    * 初始渲染完成，组件接收到新的props或者state重新渲染之前，调用该函数

  - **componentDidUpdate**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentDidUpdate(prevProps, prevState) {
              
          }
      }
    ```

    * 初始渲染完成，组件接收到新的props或者state重新渲染完成之后，调用该函数

  - **componentWillUnmount**
    * 注意：ES6写法

    ```javascript
      class Photo extends Component {
          componentWillUnmount() {
              
          }
      }
    ```

    * 组件即将从界面上移除的时候，调用该函数

  - **流程原理图**

  ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/LifeCycle/imgs/react-native-lifeCycle.jpg)

  - **Example**
    * [演示案例](https://github.com/lan-xue-xing/thinking-react-native/blob/master/LifeCycle/code/SimpleLifeCycle.js)


## React Native 布局篇
### FlexBox盒子模型及布局

  - **盒子模型**
    * Flexbox是Flexible Box的缩写，主流的浏览器都支持弹性盒子布局，flexbox布局是伸缩容器(container)和伸缩项目(item)组成。
    * Flexbox布局的主体思想是元素可以改变大小以适应可用空间，当可用空间变大，Flex元素将伸展大小以填充可用空间，当Flex元素超出可用空间时将自动缩小。 
    * 按照伸缩流的方向布局，伸缩容器有主轴和交叉轴组成，主轴既可以是水平轴，也可以是垂直轴。


  - **视频讲解**
    * [优酷](http://v.youku.com/v_show/id_XMTYzODIxMzc5Mg==.html?f=27615900&o=1)
    * [YouTuBe](https://www.youtube.com/watch?v=lKs15YIgQ_g&index=3&list=PLC_rYRxEnwQGLQqrHR0aho33U6DCeJamC)


  - **FlexBox的属性(React Native支持的)**
    * flex:1
      * 块级伸缩容器

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flex1.png)

      ```javascript
        const styles = StyleSheet.create({
            container: {
                flex: 1
            },
            header: {
                height: 200,
                backgroundColor: 'red'
            },
            main: {
                flex: 1,
                backgroundColor: 'blue'
            },
            footer: {
                height: 200,
                backgroundColor: 'green'
            },
            text: {
                color: '#ffffff',
                fontSize: 80
            }
        });
      ```

    * flexDirection:'row'|'column' 
      * 指定主轴的方向，它决定了自检内部的子组件是如何排列的，如果在View中没有定义flexDirection,则取默认值column
      * row：主轴为水平方向，起点在左端

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flexDirection-row.png)

      * column：主轴为垂直方向，起点在上沿。

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flexDirection-colume.png)

    * justifyContent:'flex-start'|'flex-end'|'center'|'space-between'|'space-around'
      * 定义在一个方向上如何排列子组件

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/justifyContent.png)

      ```
        flex-start（默认值）：左对齐
        flex-end：右对齐
        center： 居中
        space-between：两端对齐，项目之间的间隔都相等。
        space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
      ```

    * alignItems:'flex-start'|'flex-end'|'center'|'stretch'
      * 定义了View组件中所有组件的对齐规则

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/alignItem.png)

      ```
        flex-start：交叉轴的起点对齐。
        flex-end：交叉轴的终点对齐。
        center：交叉轴的中点对齐。
        stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
      ```

    * alignSelf:'auto'|'flex-start'|'flex-end'|'center'|'stretch'
      * 让组件忽略它的父组件样式中alignItems键的取值，而对应该组件使用alignSelf键对应的规则

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/alignSelf.png)

    * flexWrap:'wrap'|'nowrap'
      * 在默认的情况下，组件中的子组件按照flexDirection键决定的方向一直排列下去，即使超出了该方向的宽度或者高度也不管，flexWrap的默认值是nowrap,wrap为自动换行

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flexWrap.png)

      * nowrap 

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flexWrap-nowrap.png)

      * wrap

      ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/FlexBox/imgs/flexWrap-wrap.jpg)

    - **Example**
    * [演示案例](https://github.com/lan-xue-xing/thinking-react-native/blob/master/FlexBox/code/FlexBox.js)


## React Native 动画篇
### 动画文档详解
  
  * [React-Native动画文档手册](http://browniefed.com/react-native-animation-book/)
  * [React-Native动画使用指南](http://reactnative.cn/docs/0.31/animations.html#content)
  * [React-Native动画API](http://reactnative.cn/docs/0.31/animated.html#content)
  * [React-Native动画之Easing模块](http://facebook.github.io/react-native/docs/easing.html)
  * [贝塞尔曲线讲义](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Applications)
  * [贝塞尔曲线](http://cubic-bezier.com/#.17,.67,.83,.67)
  * [React-Native Animated动画详解](http://www.alloyteam.com/2016/01/reactnative-animated/?utm_source=tuicool&utm_medium=referral)
  * [React-Native动画研究与实践](http://web.jobbole.com/86399/)
  * [React-Native动画初探之加载动画](http://web.jobbole.com/84322/)
  * [React-Native开发之Animations动画](http://blog.csdn.net/hello_hwc/article/details/51775696)
  * [React-Native动画进阶之Animated动画库](http://www.lcode.org/react-native%E8%BF%9B%E9%98%B6%E4%B9%8Banimated%E5%8A%A8%E7%94%BB%E5%BA%93%E8%AF%A6%E8%A7%A3-%E5%AE%9E%E4%BE%8B%E7%AF%8765/)


## React Native 学习资料
### 文档类

  * [React Native官网](https://facebook.github.io/react-native/)
  * [React Native中文网](http://reactnative.cn/)
  * [React Native Training](http://www.jianshu.com/p/646c5fbd9659)
  * [React Native Awesome](https://github.com/jondot/awesome-react-native)

### 组件类
  
  * [React Native组件集合](https://react.parts/native)
  * [ReactNative组件架构设计](https://segmentfault.com/a/1190000004161358)
  * [React Native所有开源组件](https://js.coach/react-native)
  * [React Native控件之Touchable*系列组件详解](http://blog.csdn.net/developer_jiangqq/article/details/50630984)
  * [组件优酷视频讲解](http://v.youku.com/v_show/id_XMTYzODIxMzY2MA==.html?f=27615900&o=1)
  * [组件YouTuBe视频讲解](https://www.youtube.com/watch?v=ESjUmGm4Rh4&list=PLC_rYRxEnwQGLQqrHR0aho33U6DCeJamC&index=2)

### 专题类
    
  * [React Native专题](http://www.lcode.org/react-native/)
  * [React Native技术周报](http://www.lcode.org/category/react-native-zong/react-native%e6%8a%80%e6%9c%af%e5%91%a8%e6%8a%a5/)
  * [React Native样式表](http://blog.csdn.net/sbsujjbcy/article/details/50017029)
  * [React Native学习指南](http://www.tuicool.com/articles/zaInUbA)
  * [深入浅出React Native](https://zhuanlan.zhihu.com/p/19996445)
  * [React Native获取不同屏幕的像素密度](http://blog.csdn.net/u013531824/article/details/51013970)
  * [React Native页面跳转](http://blog.csdn.net/huaheshangxo/article/details/50926946)
  * [React Native热加载原理](http://www.tuicool.com/articles/myYzmqB)
  * [React Native键盘遮挡输入框](http://www.bubuko.com/infodetail-1302049.html)
  * [React Native生命周期详解](http://www.jianshu.com/p/986bcbcd02aa)
  * [React Native生命周期](http://blog.csdn.net/ElinaVampire/article/details/51813677)
  * [用纯Javascript实现React Native的文件上传](http://www.csdn.net/article/a/2016-05-10/15838051)
  * [React Native中this详解](http://blog.csdn.net/u010046908/article/details/50812572)
  * [React Native中bind以及控件显示隐藏和返回键](http://blog.csdn.net/rainmeterlinux/article/details/50774633)
  * [Init指定特定React-Native版本](http://www.jianshu.com/p/646c5fbd9659)
  * [React Native开发论坛](http://www.reactnative.vip/)
  * [React Native实现弹出选择界面与动画效果](http://blog.csdn.net/codetomylaw/article/details/51971750)
  * [React Native实现类似iPhone通讯录效果](https://github.com/chenbin92/React-native-example/issues/11)
  * [React Native之Navigator路由导航详解](http://www.cnblogs.com/dson/p/5594986.html)
  * [React Native Lesson](https://github.com/vczero/react-native-lesson)
  * [React-Native iOS 真机测试详细流程](http://www.jianshu.com/p/75eb44ccd4f0)

### 语法类

  * [React Native代码编写规范](https://github.com/sunnylqm/react-native-coding-style)
  * [React-Native 样式指南](https://github.com/doyoe/react-native-stylesheet-guide)
  * [ES5与ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
  * [ECMAScript 6入门](http://es6.ruanyifeng.com/#README)
  * [ECMAScript 6扫盲](http://www.barretlee.com/blog/2016/07/09/a-kickstarter-guide-to-writing-es6/)
  * [ES6:ES7中的6种this绑定方法](http://www.ido321.com/1670.html)
  * [JavaScript ES6箭头函数指南](https://segmentfault.com/a/1190000003781467)

### 布局类

  * [FleBox盒子模型](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  * [CSS学习网站](http://www.css88.com/)
  * [FlexBox Guide Training](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [React Native自适应布局方案](https://segmentfault.com/a/1190000004878644)

### 架构类

  * [Redux架构](http://www.jianshu.com/p/14933fd9c312)
  * [Cycle.js架构](http://cycle.js.org/)
  * [Redux中文文档](http://cn.redux.js.org/)
  * [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)
  * [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
  * [Redux基本使用](http://v.ku6.com/show/XPQZ9Ir3aSw3KNpO12tmEg...html?from=my)
  * [Redux架构优酷视频讲解](http://v.youku.com/v_show/id_XMTY1OTM5OTc2OA==.html?&f=27615900&from=y1.2-3.4.4&spm=a2h0j.8191423.item_XMTY1OTM5OTc2OA==.A)
  * [Redux架构YouTuBe视频讲解](https://www.youtube.com/watch?v=JlYwmoJyM34&index=4&list=PLC_rYRxEnwQGLQqrHR0aho33U6DCeJamC)

### 工具类

  * [ReactNative WebStorm基本配置](http://blog.csdn.net/gz_jero/article/details/51503374)
  * [制作本地库](https://github.com/frostney/react-native-create-library)

### 学习提纲
  
  * [React Native学习提纲](https://github.com/lan-xue-xing/thinking-react-native/blob/master/ResourceFile/LearningOutline/react-native-learning-outline.md)


## React Native 小功能
### style的三种写法

  1. `内连方式 style={{flex:1,borderColor:'red'}}`
  1. `包裹方式 style={[styles.style1,styles.style2]}`
  1. `包裹样式和内连 style={[styles.style1,{flex:1,borderWidth:1}]}`

### 绑定this的三种方式

  1. `this.onPageScroll.bind(this)`
  1. `()=>this.onPageScroll()` 
  1. `this.onPageScroll= this.onPageScroll.bind(this)`  注：构造函数中

### Navigator路由配置和重写物理Back键的简单封装

  * 代码演示

  ```javascript
    import React, {Component} from 'react';
    import {
        Navigator,
        Platform,
        BackAndroid
    } from 'react-native';

    import Example from './Example';

    export default class App extends Component {

        constructor(props) {
            super(props);
            this.onBackAndroid = this.onBackAndroid.bind(this);
        }

        componentWillMount() {
            if (Platform.OS === 'android') {
                BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }

        componentWillUnmount() {
            if (Platform.OS === 'android') {
                BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
            }
        }

        onBackAndroid() {
            const navigator = this.refs.navigator;
            const routers = navigator.getCurrentRoutes();
            console.log('当前路由长度：' + routers.length);
            if (routers.length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        };

        render() {
            let defaultName = 'Example';
            let defaultComponent = Example;
            return (
                    <Navigator
                        initialRoute={{ name: defaultName, component: defaultComponent }}
                        ref='navigator'
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.FadeAndroid;
                        } }
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        } }
                    />
            );
        }
    }
  ```

  * 注意事项
    * `添加物理Back键监听的时候不能使用bind和箭头函数，否则无法卸载监听器，因为它们每次被执行都返回的是一个新的函数引用
      而我们需要使用绑定的函数引用去卸载监听器，所以需要保存同一个引用，因此在构造函数中一次性绑定`
    * addEventListener(type: 'cached', listener: (ev: Event) => any, useCapture ? :boolean)
    1. 第一个参数：type类型
    1. 第二个参数：回调监听
    1. 第三个参数：是否捕获，true 的触发顺序总是在 false 之前，如果多个均为 true，则外层的触发先于内层，如果多个均为 false，则内层的触发先于外层
    

  * 图文讲解

  ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/LifeCycle/imgs/Navigator.png)

  * 再按一次退出应用

  ```javascript
    onBackAndroid() {
        const navigator = this.refs.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：' + routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
            return true;
        }
    };
  ```

  * 在退出应用之前保存数据

  ```javascript
    //写法1
    onBackAndroid = () => {
        saveData().then(()=> {
            BackAndroid.exitApp();
        });
        return true;
    }

    //写法2
    onBackAndroid = async () => {
        await saveData();
        BackAndroid.exitApp();
    }
  ```

  * 根据当前界面决定作何动作

  ```javascript
    onBackAndroid = () => {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
        const top = routers[routers.length - 1];
        if (top.ignoreBack || top.component.ignoreBack){
            // 路由或组件上决定这个界面忽略back键
            return true;
        }
        const handleBack = top.handleBack || top.component.handleBack;
        if (handleBack) {
            // 路由或组件上决定这个界面自行处理back键
            return handleBack();
        }
        // 默认行为： 退出当前界面。
        nav.pop();
            return true;
        }
        return false;
    };
  ```


  * [优酷视频讲解](http://v.youku.com/v_show/id_XMTY2MDY5MDA1Mg==.html?&f=27615900&from=y1.2-3.4.6&spm=a2h0j.8191423.item_XMTY2MDY5MDA1Mg==.A)

  * [YouTuBe视频讲解](https://www.youtube.com/watch?v=LoZe_uYey3M&list=PLC_rYRxEnwQGLQqrHR0aho33U6DCeJamC&index=6)


### 访电商客户端首页顶部滑动菜单

  * 核心代码块
  ```javascript
    export default class TopView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            activePage: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/** 内容部分 **/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
                {/** 页码部分 **/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>

            </View>
        );
    }

    /** 内容部分 **/
    renderScrollViewItem() {
        //组件数组
        let itemArr = [];
        //数据数组
        let dataArr = TopMenuData.data;
        console.log('得到的json数组');
        console.log(dataArr);
        //遍历创建组件
        for (let i=0; i<dataArr.length; i++) {
            itemArr.push(
                <TopListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            )
        }

        //返回组件数组
        return itemArr;
    }


    /** 页码部分（指示器） **/
    renderIndicator() {
        //指示器数组
        let indicatorArr = [];
        //遍历创建组件
        for (let i=0; i<2; i++) {
            //设置圆点的样式
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
            //往数组添加组件
            indicatorArr.push(
                <Text key={i} style={[styles.indicatorSizeStyle, style]}>&bull;</Text>
            )
        }

        //返回指示器数组
        return indicatorArr;
    }

    onScrollAnimationEnd(e){
        //求出当前的页码
        let currentPage = Math.ceil(e.nativeEvent.contentOffset.x / width);
        //改变状态机
        this.setState({
            activePage: currentPage
        });
    }

  }
  ```

  * 效果图

  ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/SmallFeature/app-topMenu/screenshot/toplistview.gif)

  - Demo的全部代码
    * [演示案例](https://github.com/lan-xue-xing/thinking-react-native/blob/master/SmallFeature/app-topMenu/app)


### 强制隐藏软键盘

  ```javascript
    onDismissKeyboard() {
        let dismissKeyboard = require('dismissKeyboard');
        dismissKeyboard();
    }
  ```


  * 注意事项
    - React Native版本大于0.35可以直接使用现有的api

    ```javascript
        import { Keyboard, TextInput } from 'react-native';
        ...
        render() {
            return (
            <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <TextInput />
                </View>
                </TouchableWithoutFeedback>
            );
        }
        ...
    ``` 


### React-Native引入第三方组件链接库导入配置技巧

  * React-Native版本在0.27之后，`rnpm link`命令已经被合并到React Native CLI，所以只需要简单运行一下命令：
    * 方式一

      ```
      react-native link xxx(xxx是你要引入的第三方组件的名称，例如：react-native-fs)
      ```

    * 方式二

      ```
      react-native link (不写组件名称，会自动导入配置package.json下的所有引入三方组件,包括已经配置了的，是覆盖操作)
      ```
    
  * React-Native版本在0.27之前，需要这样执行命令：
    * 方式一

      ```
      rnpm link xxx(xxx是你要引入的第三方组件的名称，例如：react-native-fs，注意这个需要安装rnpm命令：npm i -g rnpm)
      ```

    * 方式二

      ```
      rnpm link (不写组件名称，会自动导入配置package.json下的所有引入三方组件,包括已经配置了的，是覆盖操作)
      ```

### 混合开发之Android篇
 
  * 使用Android Studio打开已有的React Native项目

    1. 打开Android Studio，点击"Open an existing Android Studio project"
    1. 选择RReact Native项目目录下的android子目录下的build.gradle文件，选择打开即可

  * React Native侧发送消息到Android原生侧

    1. 新建一个接口类并继承ReactContextBaseJavaModule，然后实现React Native侧希望调用的方法
    ```java
        /**
        * 本地原生模块接口，用于与React Native侧的消息互通
        */
        public class NativeInterface extends ReactContextBaseJavaModule{

            private final ReactApplicationContext mContext;
            private static final String TAG = "NativeInterface";

            /**
            * 构造方法
            * @param reactContext 上下文
            */
            public NativeInterface(ReactApplicationContext reactContext) {
                super(reactContext);
                mContext = reactContext;
            }

            /**
            * 定义React Native侧调用原生模块的名称,React Native侧通过这个名称进行调用
            * @return 原声代码块的名称
            */
            @Override
            public String getName() {
                return "NativeInterface";
            }

            /**
            * 原生界面提供給React Native侧调用的方法
            * @param msg 消息字符串
            */
            @ReactMethod
            public void HandleMessage(String msg) {
                Log.i(TAG, "接收到来自React Native侧发送来的消息: " + msg);
                Intent intent = new Intent(mContext, NativeActivity.class);
                //这个很重要，不写会报错，用于开启新的栈
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                //用Bundle携带数据
                Bundle bundle=new Bundle();
                //传递msg参数为msg
                bundle.putString("msg", msg);
                intent.putExtras(bundle);
                //开启新的Activity
                mContext.startActivity(intent);
            }

        }
    ```
    * *注意:getName()函数是返回原生模块的名称，在React Native侧通过这个名称调用原生代码块提供的函数，该函数必须使用`@ReactMethod`关键字将其注释为React函数在React Native侧才能被调用*

    * 注册已经编写的原生代码模块，需要实现ReactPackage包管理类，且必须实现createNativeModules方法

    ```java
        /**
        * 原生模块本地的包管理类，用于注册我们编写的原生代码模块
        */
        public class NativeReactPackage implements ReactPackage{

            public NativeInterface mNativeInterface;

            /**
            * 必须要实现的方法，方法接收我们自己编写的原生模块接口
            * @param reactContext 上下文
            * @return 本地模块
            */
            @Override
            public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
                //创建集合，添加我们编写的原生模块的接口,并返回
                List<NativeModule> modules = new ArrayList<>();
                mNativeInterface = new NativeInterface(reactContext);
                modules.add(mNativeInterface);
                return modules;
            }

            @Override
            public List<Class<? extends JavaScriptModule>> createJSModules() {
                //这里并没有实现，所以返回了空
                return Collections.emptyList();
            }

            @Override
            public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
                //这里并没有实现，所以返回了空
                return Collections.emptyList();
            }
        }
    ```

    * 在MainApplication.java的getPackages()函数中创建自己编写的包管理类

    ```java
        public class MainApplication extends Application implements ReactApplication {

            public static NativeReactPackage mNativeReactPackage;

            private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

                @Override
                protected boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                mNativeReactPackage = new NativeReactPackage();
                return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ImagePickerPackage(),
                    //添加我们自己的本地包管理类
                    mNativeReactPackage
                );
                }
            };

            @Override
            public ReactNativeHost getReactNativeHost() {
                return mReactNativeHost;
            }

        }
    ```

    * React Native侧进行调用Android原生侧提供的函数

    ```Javascript
        import React, { Component } from 'react';
        import {
            View,
            Text,
            StyleSheet,
            NativeModules,
            ToastAndroid
        } from 'react-native';


        export default class NativeView extends Component {

            render() {
                return (
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text
                                style={styles.textStyle}
                                onPress={() => this.onPress()}
                            >
                                点我
                            </Text>
                        </View>
                    </View>
                );
            }

            /** 点击事件 **/
            onPress() {
                //React Native侧调用Android原生侧提供的函数，注意需要从react-native导入NativeModules
                NativeModules.NativeInterface.HandleMessage('我是React Native噢,(*^__^*) 嘻嘻');
            }

        }

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EEDFCC'
            },
            innerContainer: {
                paddingHorizontal: 150,
                paddingVertical: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#ff3333',
                borderWidth: 2
            },
            textStyle: {
                fontSize: 50,
                color: '#ff3333'
            }
        });

    ```


  * Android原生侧发送消息到React Native侧

    * 代码同上React Native侧调用原生模块，不同的是在自定义的本地接口类中新增一个方法(函数)

    ```java
        /**
        * 本地原生模块接口，用于与React Native侧的消息互通
        */
        public class NativeInterface extends ReactContextBaseJavaModule{

            private final ReactApplicationContext mContext;
            private static final String TAG = "NativeInterface";

            /**
            * 构造方法
            * @param reactContext 上下文
            */
            public NativeInterface(ReactApplicationContext reactContext) {
                super(reactContext);
                mContext = reactContext;
            }

            /**
            * 定义React Native侧调用原生模块的名称,React Native侧通过这个名称进行调用
            * @return 原声代码块的名称
            */
            @Override
            public String getName() {
                return "NativeInterface";
            }

            /**
            * 原生模块向React Native侧发送消息
            * @param message 消息
            */
            public void sendMessage(String message) {
                mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("NativeMessage", message);
            }

        }
    ```

    * Android原生侧发送事件(消息)到React Native侧

    ```java
        /**
        * 原生的界面
        */
        public class NativeActivity extends Activity {

            private Button mButton;

            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.native_view);
                //初始化View
                initView();
            }

            /**
            * 初始化View
            */
            private void initView() {
                //获取转递过来的Bundle里边的数据
                Bundle bundle = this.getIntent().getExtras();
                String msg = bundle.getString("msg");
                Toast.makeText(NativeActivity.this, "接收到来自React Native侧发送来的消息: " + msg, Toast.LENGTH_SHORT).show();
                mButton = (Button) findViewById(R.id.btn);
                //点击事件
                mButton.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        //调用本地接口NativeInterface里边定义好的方法向React Native侧发送消息
                        MainApplication.getNativePackage().mNativeInterface.sendMessage("我来自Android客户端");
                        //页面返回
                        finish();
                    }
                });
            }

        }
    ``` 

    * React Native侧接收Android侧发送过来的事件(消息)

    ```javascript
    import React, { Component } from 'react';
    import {
        View,
        Text,
        StyleSheet,
        NativeModules,
        DeviceEventEmitter,
        ToastAndroid
    } from 'react-native';


    export default class NativeView extends Component {


        // 构造
        constructor(props) {
            super(props);
            // 初始状态
            this.state = {
                showText: '哈哈'
            };
        }


        componentWillMount() {
            DeviceEventEmitter.addListener('NativeMessage', this.receiveNativeMsg.bind(this));
        }


        receiveNativeMsg(message) {
            ToastAndroid.show(message, ToastAndroid.SHORT);
            this.setState({
                showText: message
            })
        }


        render() {
            return (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text
                            style={styles.textStyle}
                            onPress={() => this.onPress()}
                        >
                            点我
                        </Text>
                        <View onLayout={this.onLayout}>
                            <Text>{this.state.showText}</Text>
                        </View>
                    </View>
                </View>
            );
        }

        /** 点击事件 **/
        onPress() {
            NativeModules.NativeInterface.HandleMessage('我是React Native噢,(*^__^*) 嘻嘻');
        }

        /** 测量控件 **/
        onLayout(event) {
            console.log(event.nativeEvent.layout);
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EEDFCC'
        },
        innerContainer: {
            paddingHorizontal: 150,
            paddingVertical: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ff3333',
            borderWidth: 2
        },
        textStyle: {
            fontSize: 50,
            color: '#ff3333'
        }
    });
    ```


### 轮播图的简单实现

  - **核心代码**

  ```JavaScript
    export default class BannerView extends Component {

    //设置默认值，可以提供外接口
    static get defaultProps() {
        return {
            duration: 3000
        }
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //当前页码
            currentPage: 0
        };
    }


    //组件加载完成的时候执行此函数
    componentDidMount() {
        this.startTimer();
    }

    //组件被卸载的时候执行此函数
    componentWillUnmount() {
        clearInterval(timer)
    }


    //开启定时器
    startTimer() {
        timer = setInterval(this.handleTimer.bind(this), this.props.duration);
    }


    //处理定时器的逻辑
    handleTimer() {
        //获取到轮播图的scrollView
        let scrollView = this.refs.scrollView;
        //当前的活动页
        let activePage = 0;
        //获取轮播图片数组的长度
        let bannerImageCount = bannerData.data.length;
        if ((this.state.currentPage + 1) > bannerImageCount) {
            activePage = 0;
        } else {
            activePage = this.state.currentPage + 1;
        }
        //更新状态机变量刷新UI
        this.setState({
            currentPage: activePage
        });
        //获取到轮播图片的横向偏移量
        let offSetX = activePage * width;
        //滚动轮播图
        scrollView.scrollResponderScrollTo({x: offSetX, y: 0, true})
    }


    render() {
        return (
            <View style={styles.container}>
                {/** 上半轮播图部分 **/}
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    //自动分页
                    pagingEnabled={true}
                    //当一帧滚动结束
                    onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
                    //开始拖拽
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    //结束拖拽
                    onScrollEndDrag={this.onScrollEndDrag.bind(this)}
                >
                {this.renderBannerImage()}
                </ScrollView>
                {/**下半指示器部分 **/}
                <View style={styles.innerContainer}>
                    {this.renderIndicatorCircle()}
                </View>
            </View>
        );
      }

        /** 上半轮播图部分 **/
        renderBannerImage() {
            //定义轮播图片数组
            let imageArr = [];
            //获取到轮播图片数据
            let bannerImageData = bannerData.data;
            //遍历，把图片资源装进数组
            for (let i = 0; i < bannerImageData.length; i++) {
                let bannerImage = bannerImageData[i];
                console.log(bannerImage.img);
                imageArr.push(
                    <Image key={i} source={{uri: bannerImage.img}} style={styles.bannerImageStyle}/>
                )
            }
            //返回图片数组
            return imageArr;
        }


        /**下半指示器部分 **/
        renderIndicatorCircle() {
            //定义指示器数组
            let indicatorArr = [];
            //定义小圆点的样式
            let indicatorStyle;
            //获取到轮播图片数据
            let bannerImageData = bannerData.data;
            for (let i = 0; i < bannerImageData.length; i++) {
                indicatorStyle = (i == this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
                indicatorArr.push(
                    <Text key={i} style={[styles.indicatorStyle, indicatorStyle]}>&bull;</Text>
                )
            }
            //返回指示器数组
            return indicatorArr;
        }


        /** 当一帧动画滚动结束 **/
        onScrollAnimationEnd(event) {
            //获取水平方向的偏移量
            let offSetX = event.nativeEvent.contentOffset.x;
            let currentPage = Math.floor(offSetX / width);
            console.log('当前的页码：' + currentPage);
            //更新状态机，重绘UI
            this.setState({
                currentPage: currentPage
            })
        }


        /** 开始拖拽 **/
        onScrollBeginDrag() {
            //卸载定时器
            clearInterval(timer);
        }


        /** 停止拖拽 **/
        onScrollEndDrag() {
            //开启定时器
            this.startTimer();
        }

    }
  ```

  - **效果图**

    ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/SmallFeature/bannerView/img/banner.gif)

  - **案例代码**
  
    * [Example](https://github.com/lan-xue-xing/thinking-react-native/blob/master/SmallFeature/code/bannerView)


### 视频播放的简单实现

  - **核心代码**

  ```JavaScript
    export default class VideoDetail extends Component {

        // 构造
        constructor(props) {
            super(props);
            // 初始状态
            this.state = {
                videoData: this.props.videoData,
                rate: 1,
                volume: 1,
                muted: false,
                paused: false,
                resizeMode: 'contain',
                duration: 0.0,
                currentTime: 0.0,
                isLoading: false,
                isLoaded: false,
                isError: false
            };
            // 绑定视频播放相关的回调函数
            this.onLoadStart = this.onLoadStart.bind(this);
            this.onLoad = this.onLoad.bind(this);
            this.onProgress = this.onProgress.bind(this);
            this.onEnd = this.onEnd.bind(this);
            this.onError = this.onError.bind(this);
            this.onReturn = this.onReturn.bind(this);
            this.repeatPlay = this.repeatPlay.bind(this);
            this.pausePlay = this.pausePlay.bind(this);
            this.resumePlay = this.resumePlay.bind(this);
            this.onFullScreen = this.onFullScreen.bind(this);
        }

        render() {
            let videoData =  this.state.videoData;
            console.log('视频播放地址：'+videoData.videoUrl);
            const flexCompleted = this.getCurrentTimePercentage() * 100;
            const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
            return (
                <View style={styles.container}>
                    <View style={styles.videoBox}>

                        {/** 视频播放界面 **/}
                        <Video
                            ref="videoPlayer"
                            source={{uri: videoData.videoUrl}}
                            repeat={false}
                            rate={this.state.rate}
                            paused={this.state.paused}
                            volume={this.state.volume}
                            muted={this.state.muted}
                            resizeMode={this.state.resizeMode}
                            onLoadStart={this.onLoadStart}
                            onLoad={this.onLoad}
                            onProgress={this.onProgress}
                            onEnd={this.onEnd}
                            onError={this.onError}
                            style={styles.videoPlayStyle}
                        />
                        {/** 视频Load加载提示 **/}
                        {
                            !this.state.isLoaded ?
                            <ActivityIndicator
                                color={'#FF3333'}
                                size={'large'}
                                style={styles.startLoadingStyle}
                            /> :null
                        }
                        {/** 视频加载出错 **/}
                        {
                            this.state.isError ?
                            <View style={styles.loadingErrorViewStyle}>
                                <Text style={styles.loadingErrorStyle}>很抱歉,视频出错啦！</Text>
                            </View> :null
                        }
                        {/** 视频暂停与播放 **/}
                        {
                            this.state.isLoaded && this.state.isLoading ?
                            <TouchableOpacity
                                onPress={this.pausePlay}
                                style={styles.pauseVideoAreaStyle}
                            >
                                {
                                    this.state.paused ?
                                    <Icon
                                        name='ios-play'
                                        size={36}
                                        onPress={this.resumePlay}
                                        style={styles.repeatPlayIconStyle}
                                    /> :null
                                }
                            </TouchableOpacity> : null
                        }
                        {/** 重新播放按钮 **/}
                        {
                            this.state.isLoaded && !this.state.isLoading ?
                            <Icon
                                name='ios-play'
                                size={36}
                                onPress={this.repeatPlay}
                                style={styles.repeatPlayIconStyle}
                            /> :null
                        }
                        {/** 视频缓冲进度条 **/}
                        <View style={styles.progress}>
                            <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
                            <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
                        </View>
                    </View>
                    {/** 返回按钮 **/}
                    <Icon
                        name={'ios-arrow-back'}
                        size={p(56)}
                        onPress={this.onReturn}
                        style={styles.returnIconStyle}
                    />
                    <Text onPress={this.onFullScreen}>全屏</Text>
                </View>
            );
        }


        // 全屏，Android客户端有点问题
        onFullScreen() {
            this.refs.videoPlayer.presentFullscreenPlayer();
            ToastAndroid.show('全屏', ToastAndroid.SHORT);
        }


        // 获取当前播放的进度
        getCurrentTimePercentage() {
            if (this.state.currentTime > 0) {
                return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
            } else {
                return 0;
            }
        }


        // 暂停播放
        pausePlay() {
            if (!this.state.paused) {
                this.setState({
                    paused: true
                })
            }
        }


        // 重新播放
        resumePlay() {
            if (this.state.paused) {
                this.setState({
                    paused: false
                })
            }
        }


        // 重新播放视频
        repeatPlay() {
            this.refs.videoPlayer.seek(0);
        }

        // 返回
        onReturn() {
            let {navigator} = this.props;
            if (navigator) {
                navigator.pop();
            }
        }

        // 当视频开始加载时回调
        onLoadStart(videoData) {
            console.log('onLoadStart----视频总长度:'+videoData.duration);
        }

        // 视频加载时候的回调
        onLoad(data) {
            this.setState({
                duration: data.duration
            });
        }

        // 视频进度回调，250ms回调与当前时间
        onProgress(videoData) {
            if(!this.state.isLoaded){
                this.setState({
                    isLoaded: true
                });
            }
            if(!this.state.isLoading){
                this.setState({
                    isLoading: true
                });
            }
            console.log('_onProgress----数据对象：'+JSON.stringify(videoData));
            console.log('_onProgress----当前时间：'+videoData.currentTime);
            this.setState({currentTime: videoData.currentTime});
        }

        // 播放结束时的回调
        onEnd() {
            console.log('onEnd');
            this.setState({
                currentTime: this.state.duration,
                isLoading: false
            })
        }

        // 无法加载视频时回调
        onError(error) {
            console.log('错误：'+JSON.stringify(error));
            this.setState({
                isError: true
            })
        }

    }
  ```

  - **效果图**

    ![image](https://github.com/lan-xue-xing/thinking-react-native/raw/master/SmallFeature/videoView/screenshot/video.gif)

  - **案例代码**
  
    * [Example](https://github.com/lan-xue-xing/thinking-react-native/blob/master/SmallFeature/videoView/code/VideoDetail.js)
    * 更详细的请看我另外写的Demo小案例[BoBoClient](https://github.com/lan-xue-xing/BoBo)


### 动态改变组件style样式

  - **案列代码**

  ```JavaScript
    ...
    constructor(props) {
        super(props);
        this.state = {
            appColor: 'red'
        }
    }

    render() {
        return (
        <View style={styles.container}>
            {/** 文字的颜色可以动态改变 **/}
            <Text style={[styles.welcome, {color: this.state.appColor}]} onPress={()=>this.onTextPress()}>
                Welcome to React Native!
            </Text>
        </View>
        );
    }

    onTextPress() {
        this.setState({
            appColor: 'green'
        });
    }
    ...

    ```


### View组件的一些使用技巧
  
  - **触摸事件**
  ```javascript
    <View style={styles.container} 
        onTouchStart={this._onTouchStart} //触摸开始
        onTouchMove={this._onTouchMove}   //触摸移动
        onTouchEnd={this._onTouchEnd}     //触摸结束
        onTouchCancel={this._onTouchCancel}
        onTouchEndCapture={this._onTouchEndCapture}
    >
    ...
    _onTouchStart(event) {
        console.log(event.nativeEvent); //输出参数有9个,见注释部分，事件存储于nativeNative对象中
    }
    /**
    nativeEvent
        changedTouches - Array of all touch events that have changed since the last event.
        identifier - The ID of the touch.
        locationX - The X position of the touch, relative to the element.
        locationY - The Y position of the touch, relative to the element.
        pageX - The X position of the touch, relative to the root element.
        pageY - The Y position of the touch, relative to the root element.
        target - The node id of the element receiving the touch event.
        timestamp - A time identifier for the touch, useful for velocity calculation.
        touches - Array of all current touches on the screen.
    **/
  ```

  * 更多使用详情可查看官网--[React-Native官网](https://facebook.github.io/react-native/docs/view.html)

  * 触摸事件的传递机制
  ```javascript
    <View style={styles.container} 
        pointerEvents='none'
    >
    /**
        React Native框架中，触摸事件总是被传递到最上层的组件。主要是pointerEvents属性('box-none', 'none', 'box-only', 'auto')。
        none：发生在本组件与本组件的子组件上的触摸事件都会交给本组件的父组件处理
        box-none：发生在本组件显示范围内（但非本组件的子组件显示范围内）的事件将交由本组件的父组件处理，发生在本组件的子组件显示范围内的触摸事件由子组件处理
        box-only：发送在本组件显示范围内的触摸事件将全部由本组件处理（即使触摸事件发生在本组件的子组件显示范围内）
        auto：是组件不同而不同，视图可以作为触控事件的目标

        注意事项：继承了View组件的其他组件也具有此属性
    **/
  ```

  * 组件的变形
  ```javascript
  const styles = StyleSheet.create({
    container: {
        transform: [{roate: '45deg'}]
    }
  }
    /**
        transform:
            [
                {translateX: number},   //平移
                {scale: number},        //缩放
                {rotate: string},       //旋转
                {skewX: string},        //倾斜
                {perspective: number},  //3D变换
                ...
            ]
    **/
  ```

  * 测量相关的回调函数
  ```javascript
   <View style={styles.container} 
        onLayout={this._onLayout}
    >
    ...
    onLayout(event) {
        let {x,y,height,width} = event.nativeEvent.layout; //解构赋值得到所有信息
        console.log(event.nativeEvent);
    }
    /**
        onLayout属性可以获取组件的宽高位置信息，信息被封装在nativeEvent的layout对象中，见示例
        判断屏幕的放置状态可以使用，height > width 为竖屏，反之为横屏,在Text组件中还可以获取到文字的长度等
        在ScrollView中还可以利用 backgroundColor:"rgba(255,0,0,"+opacity+")" 的方式和onScroll={(e) => {...}}
        做一些根据滑动距离动态改变View透明度等

        注意事项：继承了View组件的其他组件也具有此属性，onLayout事件会在组件被加载或者组件布局被改变的时候触发
                 框架计算好后立即发出，此时有可能新的布局没有被渲染到屏幕上
    **/
  ```


**[⬆ 回到目录](#内容目录)**
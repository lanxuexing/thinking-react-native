# thinking-react-native
This is some of my own to react-native learning footprint and some of his own record

## 内容目录

- React Native 环境安装
  - [Windows环境下React Native环境配置详解](#Windows环境下React Native环境配置详解)
- React Native 屏幕适配
  - [react-native-screen-adapter](#react-native-screen-adapter)
- React Native 生命周期
  - [九个生命周期一个组件渲染及其讲解](#九个生命周期一个组件渲染及其讲解)

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



**[⬆回到目录](#内容目录)**
# thinking-react-native
This is some of my own to react-native learning footprint and some of his own record

## 内容目录

- React Native 环境安装
  - [Windows环境下React Native环境配置详解](#Windows环境下React Native环境配置详解)
- React Native 屏幕适配
  - [react-native-screen-adapter](#react-native-screen-adapter)
- React Native 生命周期
  - [九个生命周期一个组件渲染及其讲解](#九个生命周期一个组件渲染及其讲解)
- React Native 布局篇
  - [盒子模型flexBox及布局](#盒子模型flexBox及布局)
- React Native 学习资料
  - [文档类](#文档类)
  - [组件类](#组件类)
  - [专题类](#专题类)
  - [语法类](#语法类)
  - [布局类](#布局类)
  - [架构类](#架构类)
  - [工具类](#工具类)
- React Native 小功能
  - [style的三种写法](#style的三种写法)
  - [绑定this的三种方式](#绑定this的三种方式)
  - [路由Navigator配置和重写物理Back键的简单封装](#路由Navigator配置和重写物理Back键的简单封装)


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


## React Native 布局篇
### 盒子模型flexBox及布局

  - **盒子模型**
    * Flexbox是Flexible Box的缩写，主流的浏览器都支持弹性盒子布局，flexbox布局是伸缩容器(container)和伸缩项目(item)组成。
    * Flexbox布局的主体思想是元素可以改变大小以适应可用空间，当可用空间变大，Flex元素将伸展大小以填充可用空间，当Flex元素超出可用空间时将自动缩小。 
    * 按照伸缩流的方向布局，伸缩容器有主轴和交叉轴组成，主轴既可以是水平轴，也可以是垂直轴。

  - * FlexBox的属性(React Native支持的)
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
  * [React nNative开发论坛](http://www.reactnative.vip/)

### 语法类

  * [React Native代码编写规范](https://github.com/sunnylqm/react-native-coding-style)
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

### 工具类

  * [ReactNative WebStorm基本配置](http://blog.csdn.net/gz_jero/article/details/51503374)


## React Native 小功能
### style的三种写法

  1. `内连方式 style={{flex:1,borderColor:'red'}}`
  1. `包裹方式 style={[styles.style1,styles.style2]}`
  1. `包裹样式和内连 style={[styles.style1,{flex:1,borderWidth:1}]}`

### 绑定this的三种方式

  1. `this.onPageScroll.bind(this)`
  1. `()=>this.onPageScroll()` 
  1. `this.onPageScroll= this.onPageScroll.bind(this)`  注：构造函数中

### 路由Navigator配置和重写物理Back键的简单封装

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


**[⬆ 回到目录](#内容目录)**
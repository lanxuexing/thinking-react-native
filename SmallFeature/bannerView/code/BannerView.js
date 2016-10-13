/**
 * Created by Administrator on 2016/10/12.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

import bannerData from '../utils/ImageData.json';

let {width} = Dimensions.get('window');
//定义定时器变量
var timer;

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


// 样式
const styles = StyleSheet.create({
    container: { //外层容器
        backgroundColor: '#fff',
        flex: 1
    },
    bannerImageStyle: { //轮播图
        height: 200,
        width: width
    },
    innerContainer: { //内层指示器容器
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    indicatorStyle: { //指示器小圆点
        //设置小圆点的大小
        fontSize: 30,
        color: 'white',
        //设置小圆点之间的距离
        marginLeft: 5
    }
});
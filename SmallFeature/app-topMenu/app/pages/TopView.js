/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';

import TopListView from '../component/TopListView';
/** 引入外部的json数据 **/
import TopMenuData from '../utils/TopMenuData.json';

let width = Dimensions.get('window').width;

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    indicatorSizeStyle: {
        fontSize: 30
    }
});

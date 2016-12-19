/**
 * Created by Administrator on 2016/11/12.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import Video from 'react-native-video';
import p from '../utils/TransForm';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    videoBox: { //视频容器
        width: width,
        height: p(615),
        backgroundColor: 'black'
    },
    videoPlayStyle: { //视频播放界面
        width: width,
        height: p(600),
        backgroundColor: 'black'
    },
    returnIconStyle: { //返回按钮
        top: 0,
        left: 0,
        marginLeft: p(30),
        marginTop: p(30),
        color: 'white',
        position: 'absolute'
    },
    repeatPlayIconStyle: { //重新播放按钮
        top: p(300) - 18,
        left: width/2 - 18,
        width: p(92),
        height: p(92),
        paddingLeft: p(36),
        paddingTop: p(16),
        backgroundColor: 'transparent',
        borderColor: '#E8E8E8',
        borderRadius: p(46),
        borderWidth: p(2),
        position: 'absolute',
        color: 'white'
    },
    startLoadingStyle: { //视频加载提示
        position:'absolute',
        left: 0,
        width: width,
        top: p(300),
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    progress: { //进度条容器
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden'
    },
    innerProgressCompleted: { //缓冲完之后的进度条
        height: 3,
        backgroundColor: '#4CBD3A'
    },
    innerProgressRemaining: { // 长在缓存的进度条
        height: 3,
        backgroundColor: '#828282'
    },
    pauseVideoAreaStyle: { //暂停与播放
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: p(600)
    },
    loadingErrorViewStyle: { //视频加载出错
        position:'absolute',
        left: 0,
        width: width,
        top: p(360),
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingErrorStyle: { //视频加载出错文字
        fontSize: p(26),
        color: '#FF3333'
    }
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const IMAGE = [
    require('../imgs/topmenu/dy.png'),
    require('../imgs/topmenu/gw.png'),
    require('../imgs/topmenu/hcpjp.png'),
    require('../imgs/topmenu/mj.png'),
    require('../imgs/topmenu/ms.png'),
    require('../imgs/topmenu/qbfl.png'),
    require('../imgs/topmenu/shfw.png'),
    require('../imgs/topmenu/tdyp.png'),
    require('../imgs/topmenu/wm.png'),
    require('../imgs/topmenu/xckc.png'),
    require('../imgs/topmenu/xxyl.png'),
    require('../imgs/topmenu/zby.png'),
    require('../imgs/topmenu/zlam.png'),
    require('../imgs/topmenu/zzc.png')
];

export const getTempPic = () =>{
    return IMAGE[parseInt(Math.random() * 14)];
};
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component,
    PropTypes
} from 'react';
import {
    ListView,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    View,
    Platform
} from 'react-native';

import {getTempPic} from '../utils/utils';

let width = Dimensions.get('window').width;
let cellW = (Platform.OS == 'ios' ? 80 : 70);
let cellH = 70;
let cols = 5;
let cellMarginLeft = (width - cellW * cols) / (cols + 1);

export default class TopListView extends Component {

    static get defaultProps() {
        return {
            dataArr: []
        }
    }

    static propTypes = {
        dataArr: PropTypes.array
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          let ds = new ListView.DataSource({
              rowHasChanged: (oldRow, newRow) => oldRow !== newRow
          });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
      }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                scrollEnabled={false}
                contentContainerStyle={styles.containerViewStyle}
            />
        );
    }

    /** 具体的Cell **/
    renderRow(rowData) {
        return(
            <View style={styles.cellViewStyle}>
                <Image source={getTempPic()} style={styles.topImageStyle}/>
                <Text style={styles.textStyle}>{rowData.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    cellViewStyle: {
        width: cellW,
        height: cellH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: cellMarginLeft
    },
    topImageStyle: {
        width: 52,
        height: 52
    },
    textStyle: {
        fontSize: 16,
        color: 'gray'
    }
});

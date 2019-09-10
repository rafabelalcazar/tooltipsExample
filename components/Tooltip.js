import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, StatusBar } from 'react-native'
import PopoverTooltip from 'react-native-popover-tooltip';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export default class Tooltip extends Component {
    state = {
        data : this.props.data
    }
    
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', }}>
                <StatusBar hidden={true} />
                <TouchableOpacity>
                    <PopoverTooltip
                        ref='tooltip1'
                        labelSeparatorColor="#fff"
                        tooltipContainerStyle={{ width: "90%", alignSelf:"center"}}
                        labelStyle={{ color: "#b3b3b3" }}
                        // labelContainerStyle={{backgroundColor:"#05aaae"}}
                        buttonComponent={ this.props.component }
                        items={this.props.data}
                        animationType='spring'
                        buttonComponentExpandRatio={1}
                        setBelow={true} // ratio of button component expansion after tooltip poped up
                    />
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bg_red: {
        backgroundColor: "red",
    },
    bg_green: {
        backgroundColor: "green"
    },
    h_40: {
        height: 40,
    }

})

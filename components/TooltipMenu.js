import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export default class TooltipMenu extends Component {
    state = {
        counterItem1: 0,
        counterItem2: 0
      };
    render() {
        return (

                <ReactNativeTooltipMenu
                style={{ }}
                widthType="full"                
                    buttonComponent={
                        <View
                            style={{
                                backgroundColor: 'purple',
                                padding: 10,
                                borderRadius: 25,
                                width: width/1.1,
                                
                            }}
                        >
                            <Text style={{ color: 'white' }}>Click me to show tooltip!</Text>
                        </View>
                    }
                    items={[
                        {
                            label: 'Label #1',
                            onPress: () => this.setState({ counterItem1: this.state.counterItem1 + 1 })
                        },
                        {
                            label: 'Label #2',
                            onPress: () => this.setState({ counterItem2: this.state.counterItem2 + 1 }),
                        },
                    ]}
                />
           
        )
    }
}

// const styles = StyleSheet.create({})

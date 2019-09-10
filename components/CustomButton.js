import React from 'react'
import { View, Text } from 'react-native'
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

const CustomButton = () => {
    return (
        <View style={{ width: width / 1.15, height: 50, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
            <Text>Press Me ok</Text>
        </View>
    )
}

export default CustomButton

import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image,StatusBar, Animated } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../components/Scale';

class Updates extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Updates</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 ,
},
})

export default Updates;
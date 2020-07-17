import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image,StatusBar, Animated } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../components/Scale';


class ImageLoader extends React.Component {
    state = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1],
                                })
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }
}

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("splash_Screen");
            this.props.navigation.navigate('Home');
        }, 2500);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageLoader
                    style={{ width: scale(150), height: scale(150),}}
                    source={require("../../assets/covid.png")}
                    resizeMode='contain'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 ,
},
})

export default SplashScreen;
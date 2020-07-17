import React from 'react';
import { Button, View, Text, StyleSheet, Picker,RefreshControl, ScrollView, ImageBackground, ActivityIndicator, Image, StatusBar, Animated } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../components/Scale';
import { connect } from 'react-redux';
import { statedata } from '../../Action'

class StateWise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PickerValueHolder: 'Andaman and Nicobar Islands',
        };
    }

    componentDidMount = async () => {
        this.getData();
    }

    getData = async () => {
        await this.props.statedata()
    }

    onRefresh = async () => {
        this.getData();
    }

    render() {
        if (this.props.loder || !Object.keys(this.props.statewise).length) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        console.log('state', this.props.statewise);
        let data = [];
        let data2 = [];
        for (let key in this.props.statewise) {
            const Object = {};
            Object = key;
            data.push(Object);
        }
        console.log('datastate', data);
        data2 = data.sort();
        console.log('data2', data2);

        return (
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            //refresh control used for the Pull to Refresh
                            onRefresh={this.onRefresh.bind(this)}
                            colors={['#a076e8', '#5dc4dd']}
                        />
                    }>
                <View
              style={{
                marginLeft: scale(10),
                marginRight:scale(10),
                marginTop:verticalScale(10),
                borderRadius: 8,
                backgroundColor: '#ffffff',
                width: scale(328),
              }}>
                <Picker
                    selectedValue={this.state.PickerValueHolder}
                    style={{ height: scale(50), width: '100%',}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                            PickerValueHolder: itemValue,
                            index: itemIndex
                        })
                    }>
                    {/* <Picker.Item label="Select" />   */}
                    {data2.map((item, key) => (
                        <Picker.Item label={item} value={item} key={key} />
                    ))}
                </Picker>
                </View>

                <View style={{ marginTop: verticalScale(15), height: 50, marginRight: scale(10), marginLeft: scale(10), flexDirection: "row", }}>
                    <View style={{ width: "50%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>DISTRICT</Text>
                    </View>
                    <View style={{ width: "50%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(5) }}>
                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>CONFIRMED</Text>
                    </View>
                </View>

                <ScrollView nestedScrollEnabled={true}>
                {Object.keys(this.props.statewise).map((item, index) => (
                    <View>
                        {this.state.PickerValueHolder === item
                            ? Object.keys(this.props.statewise[item].districtData).map((item2,index2) =>{  
                                return(
                                <View>
                                    <View style={{ marginTop: verticalScale(15), height: 50, marginRight: scale(10), marginLeft: scale(10), flexDirection: "row" }}>
                                            <View style={{ width: "50%", height: scale(30), backgroundColor: index2 % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center" }}>{item2}</Text>
                                            </View>

                                            <View style={{ width: "50%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(2), flexDirection: "row" }}>
                                            {this.props.statewise[item].districtData[item2].delta[`confirmed`] === 0 ? null :
                                                <Image
                                                    style={{ width: scale(8), height: scale(8), marginRight: scale(5) }}
                                                    source={require('../../assets/up.png')}
                                                    resizeMode="contain"
                                                />}
                                            {this.props.statewise[item].districtData[item2].delta[`confirmed`] === 0 ? null : <Text style={{ color: "#ff073a", fontSize: scale(10), fontWeight: "bold", marginRight: scale(5) }}>{this.props.statewise[item].districtData[item2].delta[`confirmed`]}</Text>}
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center", marginRight: scale(5) }}>{this.props.statewise[item].districtData[item2].confirmed}</Text>
                                        </View>
                                        </View>
                                    {/* {this.props.statewise[item].districtData.map((item3, index2) =>
                                        
                                    )} */}
                                </View>

                            )}): null}

                    </View>))}
                    </ScrollView>
                    </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
})

function mapStateToProps(state) {
    return {
        loder: state.loder,
        statewise: state.statedata.statewise
    }
}

export default connect(mapStateToProps, { statedata })(StateWise)
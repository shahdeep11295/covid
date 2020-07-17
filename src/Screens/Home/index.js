import React from 'react';
import { Button, ScrollView, View, Text, StyleSheet, RefreshControl, ImageBackground, FlatList, ActivityIndicator, Image, StatusBar, Animated } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../components/Scale';
import { connect } from 'react-redux';
import { homedata } from '../../Action'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount = async () => {
        this.getData();
    }

    getData = async () => {
        await this.props.homedata()
    }

    onRefresh = async () => {
        this.getData();
    }

    render() {
        console.log('datarem');
        if (this.props.loder || !Object.keys(this.props.rem).length) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator />
                </View>
            );
        }


        let data = [];
        let dataSource = [];

        for (var i = 0; i < this.props.rem.statewise.length; i++) {
            const Object = {};
            if (i === 0) {
                data.push(this.props.rem.statewise[i])
            } else {
                dataSource.push(this.props.rem.statewise[i])
            }
        }
        console.log('hhhh', dataSource);
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
                    <View style={{ height: scale(200), width: "100%", marginTop: verticalScale(15), flexDirection: "row", }}>
                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center", }}>
                            <Text style={{ color: "#ff073a", fontSize: scale(15), opacity: (0.5) }}>CONFIRMED</Text>
                            <Text style={{ color: "#ff073a", fontSize: scale(15), marginTop: verticalScale(10), opacity: (0.5) }}>[+{data[`0`].deltaconfirmed}]</Text>
                            <Text style={{ color: "#ff073a", fontSize: scale(15), marginTop: verticalScale(10), fontWeight: "bold" }}>{data[`0`].confirmed}</Text>

                            <Text style={{ color: "#28a745", fontSize: scale(15), opacity: (0.5), marginTop: verticalScale(20) }}>RECOVERED</Text>
                            <Text style={{ color: "#28a745", fontSize: scale(15), marginTop: verticalScale(10), opacity: (0.5) }}>[+{data[`0`].deltarecovered}]</Text>
                            <Text style={{ color: "#28a745", fontSize: scale(15), marginTop: verticalScale(10), fontWeight: "bold" }}>{data[`0`].recovered}</Text>
                        </View>

                        <View style={{ width: "50%", alignItems: "center", justifyContent: "center", }}>
                            <Text style={{ color: "#007bff", fontSize: scale(15), opacity: (0.5) }}>ACTIVE</Text>
                            <Text style={{ color: "#007bff", fontSize: scale(15), marginTop: verticalScale(10), opacity: (0.5) }}></Text>
                            <Text style={{ color: "#007bff", fontSize: scale(15), marginTop: verticalScale(10), fontWeight: "bold" }}>{data[`0`].active}</Text>

                            <Text style={{ color: "#6c757d", fontSize: scale(15), opacity: (0.5), marginTop: verticalScale(20) }}>DECEASED</Text>
                            <Text style={{ color: "#6c757d", fontSize: scale(15), marginTop: verticalScale(10), opacity: (0.5) }}>[+{data[`0`].deltadeaths}]</Text>
                            <Text style={{ color: "#6c757d", fontSize: scale(15), marginTop: verticalScale(10), fontWeight: "bold" }}>{data[`0`].deaths}</Text>
                        </View>
                    </View>
                    <ScrollView nestedScrollEnabled={true} >
                        <ScrollView horizontal>
                            <View>
                                <View style={{ marginTop: verticalScale(15), height: 50, width: scale(400), flexDirection: "row", marginLeft: scale(10), marginRight: scale(20) }}>
                                    <View style={{ width: "20%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>STATE</Text>
                                    </View>
                                    <View style={{ width: "20%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(2) }}>
                                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>CONFIRMED</Text>
                                    </View>
                                    <View style={{ width: "20%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(2) }}>
                                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>ACTIVE</Text>
                                    </View>
                                    <View style={{ width: "20%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(2) }}>
                                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>RECOVERED</Text>
                                    </View>
                                    <View style={{ width: "20%", height: scale(30), backgroundColor: "#C1C1C1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: scale(2) }}>
                                        <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold" }}>DECEASED</Text>
                                    </View>
                                </View>

                                {dataSource.map((item, index) =>
                                    <View style={{ marginTop: verticalScale(15), height: 50, width: scale(400), flexDirection: "row", marginLeft: scale(10), marginRight: scale(20) }}>
                                        <View style={{ width: "20%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center" }}>{item.state}</Text>
                                        </View>

                                        <View style={{ width: "20%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "flex-end", alignItems: "center", marginLeft: scale(2), flexDirection: "row" }}>
                                            {item.deltaconfirmed === '0' ? null :
                                                <Image
                                                    style={{ width: scale(8), height: scale(8), marginRight: scale(5) }}
                                                    source={require('../../assets/up.png')}
                                                    resizeMode="contain"
                                                />}
                                            {item.deltaconfirmed === '0' ? null : <Text style={{ color: "#ff073a", fontSize: scale(10), fontWeight: "bold", marginRight: scale(5) }}>{item.deltaconfirmed}</Text>}
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center", marginRight: scale(5) }}>{item.confirmed}</Text>
                                        </View>

                                        <View style={{ width: "20%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "center", alignItems: "flex-end", marginLeft: scale(2) }}>
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center", marginRight: scale(5) }}>{item.active}</Text>
                                        </View>

                                        <View style={{ width: "20%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "flex-end", alignItems: "center", marginLeft: scale(2), flexDirection: "row" }}>
                                            {item.deltarecovered === '0' ? null :
                                                <Image
                                                    style={{ width: scale(8), height: scale(8), marginRight: scale(5) }}
                                                    source={require('../../assets/upgreen.png')}
                                                    resizeMode="contain"
                                                />}
                                            {item.deltarecovered === '0' ? null : <Text style={{ color: "#28a745", fontSize: scale(10), fontWeight: "bold", marginRight: scale(5) }}>{item.deltarecovered}</Text>}
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center", marginRight: scale(5) }}>{item.recovered}</Text>
                                        </View>

                                        <View style={{ width: "20%", height: scale(30), backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E8E8E8", borderRadius: 10, justifyContent: "flex-end", alignItems: "center", marginLeft: scale(2), flexDirection: "row" }}>
                                            {item.deltadeaths === '0' ? null :
                                                <Image
                                                    style={{ width: scale(8), height: scale(8), marginRight: scale(5) }}
                                                    source={require('../../assets/upgray.png')}
                                                    resizeMode="contain"
                                                />}
                                            {item.deltadeaths === '0' ? null : <Text style={{ color: "#6c757d", fontSize: scale(10), fontWeight: "bold", marginRight: scale(5) }}>{item.deltadeaths}</Text>}
                                            <Text style={{ color: "#000000", fontSize: scale(12), fontWeight: "bold", textAlign: "center", marginRight: scale(5) }}>{item.deaths}</Text>
                                        </View>

                                    </View>
                                )}
                            </View>
                        </ScrollView>
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
        justifyContent:"center",
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
        rem: state.homedata.rem
    }
}

export default connect(mapStateToProps, { homedata })(Home)
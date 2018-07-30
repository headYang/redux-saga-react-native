import React, { Component } from 'react';
import Button from 'react-native-button';

import { Text, View, Image, Alert, Platform } from 'react-native';

export default class CountComponent extends Component {
    render() {
        return (
            <View style = {{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <Text style = {{ margin: 20, fontWeight: 'bold',color: 'forestgreen', fontSize: 20}}>Redux Saga Tutorial</Text>
                <View style = {{ height: 50, margin: 10, flexDirection: 'row',}}>
                    <Button containerStyle = {{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'
                    }}
                    style = {{ fontSize: 18, color: 'white' }}
                    onPress = {() => {

                    }}
                    >Decrease-</Button>
                    <Button containerStyle = {{
                        marginLeft: 30,
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'
                    }}
                    style = {{ fontSize: 18, color: 'white' }}
                    onPress = {() => {

                    }}
                    >Increase+</Button>
                </View>
            </View>
        );
    }
}
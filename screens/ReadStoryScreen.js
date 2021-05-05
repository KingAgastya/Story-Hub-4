import React from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class ReadStoryScreen extends React.Component(){

    constructor(){
        super()
        this.setState({
            search : ''
        })
    }
    render(){
        return(
            <View>
                <View style = {styles.container}>
                    <Text>Read Story</Text>
                </View>
                <SearchBar
                    placeholder = "Search"
                    onChangeText = {this.updateSearch}
                    value = {search}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    inputBox : {
        width : 200,
        height : 40,
        borderWidth : 1.5,
        borderRightWidth : 0,
        fontSize : 20
    }
})
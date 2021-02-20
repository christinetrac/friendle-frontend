import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'

export const MakeDeck = ({navigation}) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.pop()}}>
                <Image source={require('../assets/back.png')} style={styles.back}/>
            </TouchableOpacity>
            <View style={styles.box}>
                <Text style={[styles.title, {top:40}]}>Develop your deck.</Text>
                <Text style={styles.subtitle}>Build your deck and get matched with others with similar interests. </Text>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    back: {
        position: 'absolute',
        top: 60,
        left: 44
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        width: 160,
        position: 'absolute',
        left: 44,
    },
    subtitle: {
        width: 275,
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 0.2,
        position: 'absolute',
        top: 130,
        left: 44
    },
    box: {
        backgroundColor: '#ECECEC',
        width: 90 + '%',
        height: 760,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    },
    saveButton: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 20,
        borderRadius: 22.5,
        backgroundColor: '#BDBDBD',
        width:139,
        height:45
    },
    save: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    }
});

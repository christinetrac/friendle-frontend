import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: 224,
        height: 287,
        borderRadius: 27,
        zIndex: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.25,
    },
    cardHeader: {
        width:140,
        height:45,
        borderRadius: 10,
        alignSelf:'center',
        position:'absolute',
        top:-20,
        zIndex: 3,
        justifyContent:'center'
    },
    headerText: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
    },
    otherButtonLayout: {
        width:220,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex:5,
        position: 'absolute',
        top:30
    },
    buttons: {
        paddingTop:8,
        paddingBottom:8,
        paddingRight:16,
        paddingLeft:16,
        borderRadius:22.5,
        justifyContent: 'center',
        marginBottom: 12,
        marginLeft: 4,
        marginRight: 4,
        zIndex:99
    },
    otherButtonsText: {
        fontWeight: '500',
        fontSize: 12,
        textAlign: 'center',
        letterSpacing: 0.5,
        textTransform: 'capitalize'
    },
    icon: {
        alignSelf: 'center',
        top:30
    }
});

export const ProfileDeck = props => {
    const tags = () => {
        return (
            props.category.value.map( element => (
                <View key={element} style={[styles.buttons, {backgroundColor: props.category.darkColor}]}>
                    <Text style={[styles.otherButtonsText, {color: props.category.lightColor}]}>{element}</Text>
                </View>
                )
            )
        )
    };

    console.log(props.category.value);

    const mbti = () => {
    };

    return (
        <View style={{top:35, zIndex:10}}>
            <View style={{marginRight:10, marginLeft:25}}>
                <View style={[styles.cardHeader, {backgroundColor: props.category.lightColor}]}>
                    <Text style={[styles.headerText, {color: props.category.darkColor, textTransform: props.category.key === 'mbti' ? 'uppercase' : 'capitalize'}]}>{props.category.key}</Text>
                </View>
                <View style={[styles.card, {backgroundColor: props.category.cardColor}]}>
                    <Image source={props.category.file} style={styles.icon}/>
                    <View style={[styles.otherButtonLayout, {marginTop: props.category.key === 'mbti' ? 80 : 140}]}>
                        {props.category.key === 'mbti' ? mbti() : tags()}
                    </View>
                </View>
            </View>
        </View>
    );
};

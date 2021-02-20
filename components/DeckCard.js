import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: 269,
        height: 410,
        backgroundColor: '#fff',
        borderRadius: 40,
        zIndex: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
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
    description: {
        fontWeight: '400',
        fontSize:10,
        textAlign: 'center',
        color: '#515151'
    },
    otherButtonLayout: {
        width:260,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttons: {
        paddingTop:8,
        paddingBottom:8,
        paddingRight:16,
        paddingLeft:16,
        borderRadius:22.5,
        justifyContent: 'center',
        marginBottom: 9,
        marginLeft: 4,
        marginRight: 4
    },
    otherButtonsText: {
        fontWeight: '500',
        fontSize: 12,
        textAlign: 'center',
        letterSpacing: 0.5,
        textTransform: 'capitalize'
    },
    mbtiLabel: {
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 12,
        letterSpacing: 0.3,
        marginLeft: 20,
        marginBottom:8
    },
    mbtiButtonLayout: {
        width:260,
        flexDirection: 'row',
        marginBottom:10,
        justifyContent: 'center'
    },
    mbtiButton: {
        width:56,
        borderRadius:22.5,
        justifyContent: 'center',
        marginBottom: 9,
        marginLeft: 2,
        marginRight: 2,
        height:30,
        alignSelf: 'center'
    }
});

export const DeckCard = props => {

    const mbtiCategories = () => {
        return (
            props.category.values.map( group => (
                <View style={{alignSelf: 'center'}}>
                    <Text style={[styles.mbtiLabel, {color:group.darkColour}]}>{group.type}</Text>
                    <View style={styles.mbtiButtonLayout}>
                        {mbtiButtons(group)}
                    </View>
                </View>
                )
            )
        )
    };

    const mbtiButtons = (group) => {
        return (
            group.values.map( type => (
                <TouchableOpacity onPress={() => props.handleMbti(type)} key={type} style={[styles.mbtiButton, {backgroundColor: props.mbti === type ? group.darkColour: group.lightColour}]}>
                    <Text style={[{color:props.mbti === type ? group.lightColour:group.darkColour, textTransform:'uppercase', textAlign:'center', fontWeight:'500', fontSize:12, letterSpacing:0.3}]}>{type}</Text>
                </TouchableOpacity>
                )
            )
        );
    };

    const otherButton = () => {
        return (
            props.category.values.map( button => (
                    <TouchableOpacity onPress={() => props.handleOther(props.category, button)} key={button} style={[styles.buttons, {backgroundColor: props.overall.includes(button) ? props.category.darkColor:props.category.lightColor}]}>
                        <Text style={[styles.otherButtonsText, {color: props.overall.includes(button) ? props.category.lightColor:props.category.darkColor}]}>{button}</Text>
                    </TouchableOpacity>
                )
            )
        );
    };

    return (
        <View style={{top:100, zIndex:10}}>
            <View style={{marginRight:10, marginLeft:25}}>
                <View style={[styles.cardHeader, {backgroundColor: props.category.lightColor}]}>
                    <Text style={[styles.headerText, {color: props.category.darkColor, textTransform: props.category.key === 'mbti' ? 'uppercase' : 'capitalize'}]}>{props.category.key}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={[styles.description, {top: props.category.key === 'mbti' ? 50 : 70}]}>{props.category.message}</Text>
                    <View style={[styles.otherButtonLayout, {marginTop: props.category.key === 'mbti' ? 80 : 100}]}>
                        {props.category.key === 'mbti' ? mbtiCategories() : otherButton()}
                    </View>
                </View>
            </View>
        </View>
    );
};

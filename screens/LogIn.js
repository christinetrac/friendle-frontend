import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'

export const LogIn = ({navigation}) => {
    useEffect(()=> {
        fetch('https://us-east4-uofthacks-matching.cloudfunctions.net/getMatches', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "achoo",
                "mbti": "intj",
                "music": ["folk", "classical"],
                "movies": ["action"],
                "food": ["american"],
            })
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => {
                console.log(err.name);
                console.log(err.message);
            })
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={[styles.title, {top:90}]}>Welcome to Friendle.</Text>
            <View style={styles.box}>
                <Text style={[styles.title, {top:50}]}>Sign In</Text>
                <View style={styles.inputBox}>
                    <View style={[styles.icon, {top: 137}]}>
                        <Icon name="alternate-email" size={16}/>
                    </View>
                    <TextInput
                        style={[styles.input, {top:127}]}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        keyboardType={'email-address'}
                        placeholder={'Email'}
                    />
                </View>
                <View style={styles.inputBox}>
                    <View style={[styles.icon, {top: 207}]}>
                        <Icon name="lock" size={16}/>
                    </View>
                    <TextInput
                        style={[styles.input, {top:197}]}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder={'Password'}
                    />
                </View>
                <TouchableOpacity style={styles.nextButton}>
                    <Image source={require('../assets/next.png')} style={styles.next}/>
                </TouchableOpacity>
                <View style={styles.upBox}>
                    <Text style={styles.quest}>Don't have an account?</Text>
                    <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign up.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%'
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        width: 280,
        position: 'absolute',
        left: 40,
    },
    box: {
        backgroundColor: '#ECECEC',
        width: 100 + '%',
        height: 470,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        bottom: 0
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 355,
        height: 35,
        borderRadius: 22.5,
        backgroundColor: '#fff',
        paddingLeft: 50,
        paddingRight: 25,
        position: 'absolute',
        left: 27,
        fontSize: 12,
    },
    icon: {
        zIndex: 2,
        position: 'absolute',
        left: 45
    },
    next: {
        width: 42,
        height: 42,
    },
    nextButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 150
    },
    upBox: {
        alignSelf: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: 50
    },
    quest: {
        fontWeight: '600',
        fontSize: 10
    },
    link: {
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 4,
        textDecorationLine: 'underline'
    }
});

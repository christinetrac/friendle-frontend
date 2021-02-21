import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export const LogIn = ({navigation}) => {
    useEffect(()=> {
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF9089', '#FFB877']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                    flex: 1,
                }}
            />
            <Image source={require('../assets/homeCorner.png')} style={styles.banner}/>
            <Image source={require('../assets/homeBuddy.png')} style={styles.drawing}/>
            <Text style={[styles.title, {top:90, color:'#fff'}]}>Welcome to Friendle.</Text>
            <View style={styles.box}>
                <Text style={[styles.title, {top:50}]}>Sign In</Text>
                <View style={styles.inputBox}>
                    <View style={[styles.icon, {top: 137}]}>
                        <Icon name="alternate-email" size={16} color={'#AFAFAF'}/>
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
                        <Icon name="lock" size={16} color={'#AFAFAF'}/>
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
    banner: {
        position:'absolute',
        top:0,
        left:0,
        height:300,
        width:420
    },
    drawing: {
        position:'absolute',
        top:110,
        right:-20,
        height:370,
        width:370
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        width: 280,
        position: 'absolute',
        left: 40,
        color: '#515151'
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
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
        bottom: 50,
    },
    quest: {
        fontWeight: '600',
        fontSize: 10,
        color: '#515151'
    },
    link: {
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 4,
        textDecorationLine: 'underline',
        color: '#515151'
    }
});

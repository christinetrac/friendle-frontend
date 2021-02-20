import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const SignUp = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [birthday, setBirthday] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            <View style={styles.box}>
                <TouchableOpacity onPress={() => {navigation.pop()}}>
                    <Image source={require('../assets/back.png')} style={styles.back}/>
                </TouchableOpacity>
                <Text style={[styles.title, {top:95}]}>Sign Up</Text>
                <View style={styles.personal}>
                    <Text style={styles.label}>Personal Information</Text>
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input2]}
                            onChangeText={text => setFirstName(text)}
                            value={firstName}
                            placeholder={'First Name'}
                        />
                        <TextInput
                            style={[styles.input2]}
                            onChangeText={text => setLastName(text)}
                            value={lastName}
                            placeholder={'Last Name'}
                        />
                    </View>
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setLocation(text)}
                        value={location}
                        placeholder={'Location'}
                    />
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setBirthday(text)}
                        value={birthday}
                        placeholder={'Birthday'}
                    />
                </View>
                <View style={styles.login}>
                    <Text style={styles.label}>Login Information</Text>
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        keyboardType={'email-address'}
                        placeholder={'Email'}
                    />
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder={'Password'}
                    />
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setConfirmPassword(text)}
                        value={confirmPassword}
                        placeholder={'Confirm Password'}
                    />
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('MakeDeck')}>
                    <Image source={require('../assets/next.png')} style={styles.next}/>
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
        left: 40,
        width:15,
        height:20
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        width: 280,
        position: 'absolute',
        left: 40,
        color: '#515151'
    },
    personal: {
        position: 'absolute',
        top:175
    },
    label: {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.8,
        left: 40,
        paddingBottom: 14,
        color: '#515151'
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: 100 + '%',
        height: 715,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        bottom: 0
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input1: {
        width: 355,
        height: 35,
        borderRadius: 22.5,
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        left: 27,
        fontSize: 12,
        marginBottom: 20
    },
    input2: {
        width: 170,
        height: 35,
        borderRadius: 22.5,
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        left: 27,
        fontSize: 12,
        marginBottom: 20
    },
    login: {
        position: 'absolute',
        top:395
    },
    next: {
        width: 42,
        height: 42,
    },
    nextButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 55
    },
});

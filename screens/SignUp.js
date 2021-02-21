import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

export const SignUp = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [meetup, setMeetup] = useState('');
    const [discord, setDiscord] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNext = () => {
        const profile = {
            firstName: firstName,
            lastName: lastName,
            location: location,
            age: age,
            gender: gender,
            meetup: meetup,
            discord: discord,
            email: email,
            password: password
        };
        navigation.navigate('MakeDeck', {profile:profile});
    };

    const placeholderMeetup = {
        label: 'Meetup Type',
        value: '',
        color: '#9EA0A4',
    };
    const placeholderGender = {
        label: 'Gender',
        value: '',
        color: '#9EA0A4',
    };

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
            <Image source={require('../assets/banner.png')} style={styles.banner} imageStyle={{opacity:0.5}}/>
            <Image source={require('../assets/signup.png')} style={styles.buddy}/>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => {navigation.pop()}}>
                    <Image source={require('../assets/back.png')} style={styles.back}/>
                </TouchableOpacity>
                <Text style={[styles.title, {top:95}]}>Sign Up</Text>
                <View style={styles.personal}>
                    <Text style={styles.label}>Personal Information</Text>
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input2, {paddingLeft: 25, paddingRight: 25, width:170}]}
                            onChangeText={text => setFirstName(text)}
                            value={firstName}
                            placeholder={'First Name'}
                        />
                        <TextInput
                            style={[styles.input2, {paddingLeft: 25, paddingRight: 25, width:170}]}
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
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input2, {textAlign:'center', width: 74}]}
                            onChangeText={text => setAge(text)}
                            value={age}
                            placeholder={'Age'}
                            keyboardType={'numeric'}
                        />
                        <RNPickerSelect
                            onValueChange={(value) => setGender(value)}
                            items={[
                                { label: 'Female', value: 'Female' },
                                { label: 'Male', value: 'Male' },
                                { label: 'Other', value: 'Other' },
                            ]}
                            style={pickerSelectStyles}
                            placeholder={placeholderGender}
                        />
                        <RNPickerSelect
                            onValueChange={(value) => setMeetup(value)}
                            items={[
                                { label: 'Virtual', value: 'Virtual' },
                                { label: 'Real Life', value: 'Real Life' },
                            ]}
                            style={pickerSelectStyles}
                            placeholder={placeholderMeetup}
                        />
                    </View>
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setDiscord(text)}
                        value={discord}
                        placeholder={'Discord Tag #'}
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
                        secureTextEntry={true}
                        placeholder={'Password'}
                    />
                    <TextInput
                        style={[styles.input1]}
                        onChangeText={text => setConfirmPassword(text)}
                        value={confirmPassword}
                        secureTextEntry={true}
                        placeholder={'Confirm Password'}
                    />
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={() => handleNext()}>
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
    banner: {
        position:'absolute',
        top:20,
        height:173,
        width:410
    },
    buddy: {
        position:'absolute',
        top:120,
        right:-45,
        height:315,
        width:315
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
        top:160
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
        height: 35,
        borderRadius: 22.5,
        backgroundColor: '#fff',
        left: 27,
        fontSize: 12,
        marginBottom: 20
    },
    input3: {
        height: 35,
        backgroundColor: '#fff',
        left: 27,
        fontSize: 12,
        marginBottom: 20
    },
    login: {
        position: 'absolute',
        top:420
    },
    next: {
        width: 42,
        height: 42,
    },
    nextButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 22.5,
        height: 35,
        backgroundColor: '#fff',
        left: 27,
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        width: 130
    },
});


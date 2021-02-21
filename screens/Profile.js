import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import { MBTI, GAMES, FOOD, MUSIC, MOVIES} from "../constants/constants";
import { LinearGradient } from 'expo-linear-gradient';
import {Icon} from "react-native-elements";
import {ProfileDeck} from "../components/ProfileDeck";

export const Profile = ({navigation, route}) => {
    const profile = route?.params?.profile;
    const deck = route?.params?.deck;
    const [match, setMatch] = useState(null);

    useEffect(() => {
        fetch('https://us-east4-uofthacks-matching.cloudfunctions.net/getMatches', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": profile.firstName,
                "location": profile.location,
                "mbti": deck.mbti,
                "music": deck.music,
                "movies": deck.movies,
                "food": deck.food
            })
        })
            .then(response => response.json())
            .then(json => setMatch(json))
            .catch(err => {
                console.log(err.name);
                console.log(err.message);
            });
    });

    const genderIcon = () => {
        if(profile.gender === 'Male'){
            return (
                <Icon name='male' type='ionicon' color={'#fff'} size={11}/>
            )
        } else {
            return (
                <Icon name='female' type='ionicon' color={'#fff'} size={11}/>
            )
        }
    };

    const info = [
        {
            key: 'mbti',
            value: deck.mbti,
            lightColor: MBTI.lightColor,
            darkColor: MBTI.darkColor,
            cardColor: '#F7FFFE',
            file: require('../assets/intj.png')
        },
        {
            key: 'movies',
            value: deck.movies,
            lightColor: MOVIES.lightColor,
            darkColor: MOVIES.darkColor,
            cardColor: '#F7FFF7',
            file: require('../assets/movie.png')
        },
        {
            key: 'music',
            value: deck.music,
            lightColor: MUSIC.lightColor,
            darkColor: MUSIC.darkColor,
            cardColor: '#FFFEF0',
            file: require('../assets/music.png')
        },
        {
            key: 'games',
            value: deck.games,
            lightColor: GAMES.lightColor,
            darkColor: GAMES.darkColor,
            cardColor: '#FCF7FF',
            file: require('../assets/gaming.png')
        },
        {
            key: 'food',
            value: deck.food,
            lightColor: FOOD.lightColor,
            darkColor: FOOD.darkColor,
            cardColor: '#F7FAFF',
            file: require('../assets/food.png')
        }
    ];

    const cards = info.map( category => (
            <ProfileDeck key={category.key}
                      category={category}
            />
        )
    );

    const handleMatch = () => {
        navigation.navigate('MatchedProfile', {buddy:match});
    };

    return(
        <View style={styles.container}>
            <Image source={require('../assets/banner.png')} style={styles.banner} imageStyle={{opacity:0.5}}/>
            <LinearGradient
                colors={['#C6F4F2', '#C8C7FF']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                    flex: 1,
                    zIndex:-1
                }}
            />
            <ScrollView>
                <TouchableOpacity style={styles.start} onPress={() => handleMatch()}>
                    <Text style={styles.startText}>Start Matching</Text>
                    <Image source={require('../assets/start.png')} style={styles.startArrow}/>
                </TouchableOpacity>
                <View style={styles.box1}>
                    <Image source={require('../assets/profile.jpg')} style={styles.pic}/>
                    <Text style={styles.name}>{profile.firstName} {profile.lastName}</Text>
                    <Text style={styles.location}>{profile.location}</Text>
                    <View style={styles.badgeBox}>
                        <View style={[styles.badge, {backgroundColor:'#70D0DD', flexDirection:'row', justifyContent:'center', width:60}]}>
                            <View style={{marginTop:4, paddingRight:3}}>
                                {genderIcon()}
                            </View>
                            <Text style={[styles.badgeText, {marginTop:3}]}>{profile.age}</Text>
                        </View>
                        <View style={[styles.badge, {backgroundColor:'#9EC2B8'}]}>
                            <Text style={styles.badgeText}>{profile.meetup}</Text>
                        </View>
                    </View>
                    <View style={styles.tagLayout}>
                        <View style={[styles.tag, {backgroundColor: MUSIC.lightColor}]}>
                            <Text style={[styles.tagText, {color: MUSIC.darkColor}]}>{deck.music[0]}</Text>
                        </View>
                        <View style={[styles.tag, {backgroundColor: MOVIES.lightColor}]}>
                            <Text style={[styles.tagText, {color: MOVIES.darkColor}]}>{deck.movies[0]}</Text>
                        </View>
                        <View style={[styles.tag, {backgroundColor: GAMES.lightColor}]}>
                            <Text style={[styles.tagText, {color: GAMES.darkColor}]}>{deck.games[0]}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.yourDeck}>
                        <Text style={styles.yourDeckText}>{profile.firstName}'s Deck</Text>
                    </View>
                    <View style={{height: 400, width:360, position:'absolute', bottom:0, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {cards}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%',
    },
    banner: {
        position:'absolute',
        top:20,
        height:173,
        width:410
    },
    start: {
        position: 'absolute',
        height:38,
        width:160,
        right:0,
        top:70,
        backgroundColor:'#7775E1',
        borderTopLeftRadius:19,
        borderBottomLeftRadius:19,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.25,
        justifyContent: 'center'
    },
    startText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 12,
        paddingLeft:30
    },
    startArrow: {
        width:12,
        height:16,
        position:'absolute',
        right: 15
    },
    box1: {
        borderRadius: 40,
        width:360,
        height:290,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        alignSelf: 'center',
        top:175
    },
    pic: {
        position: 'absolute',
        zIndex: 5,
        borderRadius:115,
        top:-50,
        borderColor: '#fff',
        borderWidth:5,
        alignSelf: 'center',
        height:115,
        width:115
    },
    name: {
        color: '#595353',
        fontSize: 25,
        fontWeight: '600',
        position: 'absolute',
        top:78,
        alignSelf: 'center'
    },
    location: {
        color: '#515151',
        fontSize: 12,
        position: 'absolute',
        top:115,
        alignSelf: 'center'
    },
    badgeBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top:140,
        width:155,
        alignSelf: 'center'
    },
    badge: {
        height:22,
        width:70,
        borderRadius:11,
        justifyContent: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize:12,
        textAlign: 'center',
        fontWeight: '600',
    },
    tag: {
        height:31,
        borderRadius:8,
        justifyContent: 'center',
        paddingTop:8,
        paddingBottom:8,
        paddingRight:16,
        paddingLeft:16,
        marginBottom:10,
        marginLeft:5,
        marginRight:5
    },
    tagText: {
        fontSize:12,
        fontWeight:'600',
        textAlign:'center',
        textTransform: 'capitalize'
    },
    tagLayout: {
        width:200,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        top:160
    },
    box2: {
        borderRadius: 40,
        width:360,
        height:450,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        alignSelf: 'center',
        top:485
    },
    yourDeck: {
        width:120,
        height:30,
        borderRadius:15,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        position:'absolute',
        left:30,
        top:17
    },
    yourDeckText: {
        color: '#515151',
        fontSize:12,
        fontWeight:'600',
        textAlign:'center'
    }
});

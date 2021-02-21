import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import { MBTI, GAMES, FOOD, MUSIC, MOVIES} from "../constants/constants";
import { LinearGradient } from 'expo-linear-gradient';
import {Icon} from "react-native-elements";
import {ProfileDeck} from "../components/ProfileDeck";

export const MatchedProfile = ({navigation, route}) => {
    const buddy = route?.params?.buddy;
    const matchProfile = buddy.match_profile;
    const hangout = buddy.hangout;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        yourFunction().then();
    },[]);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const yourFunction = async () => {
        await delay(5000);
        setLoading(true);
    };

    const genderIcon = () => {
        if(matchProfile?.gender === 'male'){
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
            value: matchProfile?.mbti,
            lightColor: MBTI.lightColor,
            darkColor: MBTI.darkColor,
            cardColor: '#F7FFFE',
            file: require('../assets/intj.png')
        },
        {
            key: 'movies',
            value: matchProfile?.movies,
            lightColor: MOVIES.lightColor,
            darkColor: MOVIES.darkColor,
            cardColor: '#F7FFF7',
            file: require('../assets/intj.png')
        },
        {
            key: 'music',
            value: matchProfile?.music,
            lightColor: MUSIC.lightColor,
            darkColor: MUSIC.darkColor,
            cardColor: '#FFFEF0',
            file: require('../assets/intj.png')
        },
        {
            key: 'games',
            value: matchProfile?.games,
            lightColor: GAMES.lightColor,
            darkColor: GAMES.darkColor,
            cardColor: '#FCF7FF',
            file: require('../assets/intj.png')
        },
        {
            key: 'food',
            value: matchProfile?.food,
            lightColor: FOOD.lightColor,
            darkColor: FOOD.darkColor,
            cardColor: '#F7FAFF',
            file: require('../assets/intj.png')
        }
    ];

    const cards = info?.map( category => (
            <ProfileDeck key={category.key}
                         category={category}
            />
        )
    );

    return(
        loading ? (
        <View style={styles.container}>
            <Image source={require('../assets/banner.png')} style={styles.banner}/>
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
                <TouchableOpacity onPress={() => {navigation.pop()}}>
                    <Image source={require('../assets/back.png')} style={styles.back}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.start} onPress={() => navigation.navigate('Hangout', {hangout:hangout})}>
                    <Text style={styles.startText}>View Hangout</Text>
                    <Image source={require('../assets/start.png')} style={styles.startArrow}/>
                </TouchableOpacity>
                <View style={styles.box1}>
                    <Image source={require('../assets/match.jpg')} style={styles.pic}/>
                    <Text style={styles.name}>{matchProfile?.first_name} {matchProfile?.last_name}</Text>
                    <Text style={styles.location}>{matchProfile?.location}</Text>
                    <View style={styles.badgeBox}>
                        <View style={[styles.badge, {backgroundColor:'#70D0DD', flexDirection:'row', justifyContent:'center', width:60}]}>
                            <View style={{marginTop:4, paddingRight:3}}>
                                {genderIcon()}
                            </View>
                            <Text style={[styles.badgeText, {marginTop:3}]}>{matchProfile?.age}</Text>
                        </View>
                        <View style={[styles.badge, {backgroundColor:'#9EC2B8'}]}>
                            <Text style={styles.badgeText}>{matchProfile?.loc_preference}</Text>
                        </View>
                    </View>
                    <View style={styles.tagLayout}>
                        <View style={[styles.tag, {backgroundColor: MUSIC.lightColor}]}>
                            <Text style={[styles.tagText, {color: MUSIC.darkColor}]}>{matchProfile?.music[0]}</Text>
                        </View>
                        <View style={[styles.tag, {backgroundColor: MOVIES.lightColor}]}>
                            <Text style={[styles.tagText, {color: MOVIES.darkColor}]}>{matchProfile?.movies[0]}</Text>
                        </View>
                        <View style={[styles.tag, {backgroundColor: GAMES.lightColor}]}>
                            <Text style={[styles.tagText, {color: GAMES.darkColor}]}>{matchProfile?.games[0]}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.yourDeck}>
                        <Text style={styles.yourDeckText}>{matchProfile?.first_name}'s Deck</Text>
                    </View>
                    <View style={{height: 400, width:360, position:'absolute', bottom:0, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {cards}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
        ):(
            <View style={styles.container}>
                <Image source={require('../assets/loading.gif')} style={styles.loading}/>
                <Text style={styles.loadingText}>Finding a Buddy...</Text>
                <LinearGradient
                    colors={['#FF9089', '#FFB877']}
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
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%',
    },
    loading: {
        position:'absolute',
        top:10,
        width:381,
        height:785,
        alignSelf:'center'
    },
    loadingText:{
        fontWeight:'600',
        fontSize:25,
        textAlign:'center',
        position:'absolute',
        bottom:262,
        alignSelf:'center',
        color:'#fff'
    },
    banner: {
        position:'absolute',
        top:20,
        height:173,
        width:410
    },
    back: {
        position: 'absolute',
        top: 60,
        left: 40,
        width:15,
        height:20
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

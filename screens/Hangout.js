import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MBTI, GAMES, FOOD, MUSIC, MOVIES} from "../constants/constants";
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';
import {Icon} from "react-native-elements";

export const Hangout = ({navigation, route}) => {
    return(
            <View style={styles.container}>
                <Image source={require('../assets/banner.png')} style={styles.banner} imageStyle={{opacity:0.5}}/>
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
                <TouchableOpacity onPress={() => {navigation.pop()}}>
                    <Image source={require('../assets/back.png')} style={styles.back}/>
                </TouchableOpacity>
                <View style={styles.box}>
                    <View style={[styles.virtual, {backgroundColor:'#9EC2B8'}]}>
                        <Text style={styles.virtualText}>Virtual</Text>
                    </View>
                    <Text style={[styles.title, {top:71}]}>Achoo and Jacob's Hangout</Text>
                    <Text style={styles.subtitle}>We’ve generated a hangout session for you and your new friend. </Text>
                    <Text style={[styles.label, {top:195}]}>Buddies</Text>
                    <View style={styles.tagBox}>
                        <View style={styles.tag}>
                            <View style={[styles.circle, {backgroundColor:'#56BCB6'}]}/>
                            <Text style={styles.tagText}>Achoo #7382</Text>
                        </View>
                        <View style={styles.tag}>
                            <View style={[styles.circle, {backgroundColor:'#EFAD2C'}]}/>
                            <Text style={styles.tagText}>Jacub #2381</Text>
                        </View>
                    </View>
                    <Text style={[styles.label, {top:286}]}>Hangout Reccomendations</Text>
                    <View style={{height: 500, width:370, position:'absolute', top:315, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{marginRight:10, marginLeft:25, flexDirection:'row'}}>
                                <View style={[styles.card, {backgroundColor:'#FFFEF0'}]}>
                                    <View style={[styles.badge, {backgroundColor: MUSIC.lightColor}]}>
                                        <Text style={[styles.badgeText, {color: MUSIC.darkColor}]}>Pop</Text>
                                    </View>
                                    <Text style={styles.brand}>Spotify</Text>
                                    <Text style={styles.info}>Achoo and Jacob’s Playlist</Text>
                                    <View style={{width:200, height:240, borderRadius:12, position:'absolute', alignSelf:'center', bottom:30, overflow: "hidden"}}>
                                        <WebView
                                            originWhitelist={['*']}
                                            source={{ uri:'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3' }} />
                                    </View>
                                </View>
                                <View style={[styles.card, {backgroundColor:'#F6FFF7'}]}>
                                    <View style={[styles.badge, {backgroundColor: MOVIES.lightColor}]}>
                                        <Text style={[styles.badgeText, {color: MOVIES.darkColor}]}>Action</Text>
                                    </View>
                                    <Text style={styles.brand}>IMDB</Text>
                                    <Text style={styles.info}>Recommended movie for your tastes</Text>
                                    <Image source={require('../assets/moviePoster.png')} style={styles.poster}/>
                                    <View style={[styles.bottom, {backgroundColor: MOVIES.lightColor}]}>
                                        <Text style={[styles.bottomText, {color: MOVIES.darkColor}]}>Wonder Woman 1984</Text>
                                    </View>
                                </View>
                                <View style={[styles.card, {backgroundColor:'#F6FAFF'}]}>
                                    <View style={[styles.badge, {backgroundColor: FOOD.lightColor}]}>
                                        <Text style={[styles.badgeText, {color: FOOD.darkColor}]}>French</Text>
                                    </View>
                                    <Text style={styles.brand}>Yelp</Text>
                                    <Text style={styles.info}>Recommended restaurants for you </Text>
                                    <Image source={require('../assets/foodPoster.jpg')} style={styles.poster}/>
                                    <View style={[styles.bottom, {backgroundColor: FOOD.lightColor}]}>
                                        <Text style={[styles.bottomText, {color: FOOD.darkColor}]}>Muncheez</Text>
                                        <View style={{flexDirection:'row', alignSelf:'center'}}>
                                            <View style={{marginTop:6}}>
                                                <Icon name={'location-on'} size={13} color={'#FF6D6D'}/>
                                            </View>
                                            <Text style={styles.location}>Downtown Toronto</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.card, {backgroundColor:'#FCF6FF'}]}>
                                    <Text style={styles.brand}>Gaming</Text>
                                    <Text style={styles.info}>A game that might suit your interests</Text>
                                    <Image source={require('../assets/gamePoster.png')} style={styles.poster}/>
                                    <View style={[styles.bottom, {backgroundColor: GAMES.lightColor}]}>
                                        <Text style={[styles.bottomText, {color: GAMES.darkColor}]}>Minecraft</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100 + '%',
        zIndex: -10
    },
    banner: {
        position:'absolute',
        top:0,
        height:173,
        width:410,
    },
    back: {
        position: 'absolute',
        top: 60,
        left: 40,
        width:15,
        height:20
    },
    virtual: {
        position:'absolute',
        width:71,
        height:22,
        borderRadius:11,
        left:31,
        top:37,
        justifyContent:'center'
    },
    virtualText: {
        textAlign: 'center',
        color: '#fff',
        fontSize:12,
        fontWeight:'600'
    },
    badge: {
        height:31,
        borderRadius:8,
        justifyContent: 'center',
        paddingTop:8,
        paddingBottom:8,
        paddingRight:16,
        paddingLeft:16,
        marginBottom:10,
        marginLeft:5,
        marginRight:5,
        position:'absolute',
        right:15,
        top:15
    },
    badgeText: {
        fontSize:12,
        fontWeight:'600',
        textAlign:'center',
        textTransform: 'capitalize'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        width: 233,
        position: 'absolute',
        left: 30,
        color: '#515151'
    },
    subtitle: {
        width: 275,
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 0.2,
        position: 'absolute',
        top: 150,
        left: 30,
        color: '#515151'
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.8,
        left: 30,
        paddingBottom: 14,
        color: '#515151',
        position:'absolute'
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: 90 + '%',
        height: 750,
        borderRadius: 50,
        position: 'relative',
        marginTop: 120,
        alignSelf: 'center',
        zIndex: 2
    },
    tagBox: {
        flexDirection: 'row',
        width:350,
        justifyContent: 'space-around',
        alignSelf: 'center',
        top:218
    },
    tag: {
        width:153,
        height:45,
        backgroundColor: '#fff',
        borderRadius: 68.5,
        justifyContent: 'center'
    },
    tagText:{
        fontSize: 12,
        fontWeight: '500',
        left: 53,
        color: '#515151',
        position:'absolute'
    },
    circle: {
        width:34,
        height:34,
        borderRadius:34,
        position:'absolute',
        left:8
    },
    card: {
        height:370,
        width:239,
        borderRadius:23,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.25,
        marginRight:20
    },
    brand: {
        fontWeight:'600',
        fontSize:25,
        width:110,
        position:'absolute',
        left:28,
        top:16
    },
    info: {
        width: 142,
        fontWeight: '500',
        fontSize: 12,
        position: 'absolute',
        top: 60,
        left: 28,
        color: '#515151'
    },
    bottom: {
        height:91,
        width:'100%',
        position:'absolute',
        bottom:0,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: 'center'
    },
    bottomText: {
        width:150,
        fontWeight:'600',
        fontSize:18,
        alignSelf: 'center',
        textAlign:'center'
    },
    poster: {
        borderRadius:9,
        width:121,
        height:170,
        position:'absolute',
        alignSelf:'center',
        top:100
    },
    location: {
        textDecorationLine:'underline',
        fontSize:12,
        fontWeight:'400',
        letterSpacing:0.6,
        color: '#515151',
        alignSelf:'center',
        paddingTop:6
    }
});

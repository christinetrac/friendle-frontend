import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MBTI, GAMES, FOOD, MUSIC, MOVIES} from "../constants/constants";
import {DeckCard} from "../components/DeckCard";
import { LinearGradient } from 'expo-linear-gradient';

export const MakeDeck = ({navigation, route}) => {
    const profile = route?.params?.profile;

    const [mbti, setMbti] = useState('');
    const [movies, setMovies] = useState([]);
    const [music, setMusic] = useState([]);
    const [games, setGames] = useState([]);
    const [food, setFood] = useState([]);
    const [overall, setOverall] = useState([]);

    const handleMbti = (type) => {
        setMbti(type);
    };

    const handleOther = (category, selected) => {
        if(category.key === 'movies'){
            let arr = movies.concat(selected);
            setMovies(arr);
        } else if (category.key === 'music') {
            let arr = music.concat(selected);
            setMusic(arr);
        } else if (category.key === 'games') {
            let arr = games.concat(selected);
            setGames(arr);
        } else { //food
            let arr = food.concat(selected);
            setFood(arr);
        }
        let overallArr = overall.concat(selected);
        setOverall(overallArr);
    };

    const handleSave = () => {
        fetch('https://us-central1-uofthacks-matching.cloudfunctions.net/createUser', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": profile.firstName,
                "profile": {
                    "first_name": profile.firstName,
                    "last_name": profile.lastName,
                    "gender": profile.gender,
                    "age": profile.age,
                    "mbti": mbti,
                    "location": profile.location,
                    "loc_preference": profile.meetup,
                    "movies": movies,
                    "music": music,
                    "food": food,
                    "games": games
                }
            })
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => {
                console.log(err.name);
                console.log(err.message);
            });

        const deck = {
            mbti: mbti,
            movies: movies,
            music: music,
            games: games,
            food: food
        };
        navigation.navigate('Profile', {profile:profile, deck:deck});
    };

    const cards = [MBTI, MOVIES, MUSIC, GAMES, FOOD].map( category => (
            <DeckCard key={category.key}
                      category={category}
                      handleMbti={(type) => handleMbti(type)}
                      handleOther={(category, select) => handleOther(category, select)}
                      mbti={mbti}
                      movies={movies}
                      music={music}
                      games={games}
                      food={food}
                      overall={overall}
            />
        )
    );

    return(
        <View style={styles.container}>
            <Image source={require('../assets/banner.png')} style={styles.banner}/>
            <Image source={require('../assets/deckBuddy.png')} style={styles.buddy} imageStyle={{opacity:0.5}}/>
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
                <Text style={[styles.title, {top:40}]}>Develop your deck.</Text>
                <Text style={styles.subtitle}>Build your deck and get matched with others with similar interests. Show off who you are! </Text>
                <View style={{height: 600, width:370, position:'absolute', bottom:0, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {cards}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => handleSave()}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
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
        top:39,
        height:173,
        width:410
    },
    buddy: {
        position:'absolute',
        top:80,
        right:20,
        height:282,
        width:159
    },
    back: {
        position: 'absolute',
        top: 60,
        left: 40,
        width:15,
        height:20
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        width: 160,
        position: 'absolute',
        left: 44,
        color: '#515151'
    },
    subtitle: {
        width: 275,
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 0.2,
        position: 'absolute',
        top: 130,
        left: 44,
        color: '#515151'
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: 90 + '%',
        height: 700,
        borderRadius: 50,
        position: 'relative',
        marginTop: 150,
        alignSelf: 'center',
        zIndex: -1
    },
    saveButton: {
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 20,
        borderRadius: 22.5,
        backgroundColor: '#7775E1',
        width:139,
        height:45
    },
    save: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }
});

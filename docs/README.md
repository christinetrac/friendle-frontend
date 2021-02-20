# UofTHacks Tech writeup

## Description
Quarantining alone is hard. Choosing fun things to do is even harder. 
We built an app that matches you with other people and suggests virtual-friendly hangout ideas based on our AI algorithm 🤝💖

## Front-end
We used React Native to build a native iOS app!

[Insert Figma here]

## Back-end

### Demo
We have a publicly available API that you can use to get hangout recommendations!

<!-- Create User endpoint: [todo]
Matching and hangout recommendation endpoint: [todo] -->

You can make a POST request to our endpoint to get recommended quarantine activities anywhere, anytime 😊

e.g.
`curl  -d '{"username":"achoo2","location":"toronto,ca","mbti":"entp","music":["kpop"],"movies":["action"],"food":["sushi"]}' -H 'Content-Type: application/json' '	https://recgate-1g9rdgr6.uc.gateway.dev/rec'
`

### Architecture
![arch diagram](uofthacks-backend.jpg)

We chose to use a serverless framework that scales automatically: Google Cloud Functions. We hosted our API (written in Python3) and integrated Firebase to persist user information for later retrieval. 

### Algorithm
In order to match users, we encoded the user preferences into a vector to compute similarity scores with users. We tried to pair the user that was closest in terms of spacial score (using a nearest neighbor algorithm). After retrieving a match, we mapped various preferences into keywords and queried the Spotify/Yelp/TMDB APIs to generate some interesting activities that the pair might enjoy! 
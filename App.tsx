import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function App() {

  const [text, setText] = React.useState("Hello");
  const [likesCount,setlikesCount] = React.useState(15);
  const [retweeetsCount,setretweetsCount] = React.useState(111);
  const [isLiked,setisLiked] = React.useState(false);
  const [isRetweeted,setisRetweeted] = React.useState(false);
  const textLimit = 25;

  const clickLike = ()=>{
    if(isLiked)
      setlikesCount(likesCount-1);
    else 
      setlikesCount(likesCount+1);

    setisLiked(!isLiked);
  }

  const clickRetweet = ()=>{
    if(isRetweeted)
      setretweetsCount(retweeetsCount-1);
    else 
      setretweetsCount(retweeetsCount+1);

    setisRetweeted(!isRetweeted);
  }

  const tweetStyle = () => {
    return {
      backgroundColor: '#fff',
      width: 380,
      borderRadius: 18,
      padding: 15,
      borderColor: text.length > textLimit ? "red" : "white",
      borderWidth: 2
    }
  }

  return (
    <View style={styles.container}>
      <View style={tweetStyle()}>

        <View style={styles.user}> 
          <View>
            <Image source={require('./profileImage.jpeg')} style={styles.image} />
          </View>
          <View style={styles.usernameBox}>
            <Text style={styles.fullName}>Arnab Poddar</Text>
            <Text style={styles.username}>@ArnabPoddar_ap</Text>
          </View>
        </View>

        <View>
          <TextInput
            style = {styles.input}
            onChangeText={setText}
            value={text}
          />
         
        </View>

        <View style={styles.footer}>
          <View style={styles.stats} onTouchEnd={clickLike}>
            {isLiked ? 
              <AntDesign name="heart" size={19} color="red" />
            :
              <AntDesign name="hearto" size={19} color="black" />
            }
            <Text>{likesCount}</Text>
          </View>

          <View style={styles.stats} onTouchEnd={clickRetweet}>
            <EvilIcons name="retweet" size={26} color={isRetweeted ? "green": "black"} />
            <Text>{retweeetsCount}</Text>
          </View>

          <View style={styles.stats}>
            <MaterialCommunityIcons name="message-outline" size={20} color="#1DA1F2" />
            <Text>15</Text>
          </View>
          <Text style={{color: text.length > textLimit ? 'red' : 'black'}}>{text.length}/{textLimit}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweet: {
    backgroundColor: '#fff',
    width: 380,
    
    borderRadius: 18,
    padding: 15,
    borderColor:'red',
    borderWidth: 2
  },
  user: {
    display: "flex",
    flexDirection: "row"
  },
  usernameBox:{
    paddingLeft: 10,
    paddingTop: 5,
    marginBottom: 20
  },
  fullName:{
    fontSize: 15,
  },
  username:{
    color: "grey",
  },
  image:{
    height: 50,
    width: 50,
    borderRadius: 100
  },
  input:{
    borderWidth: 0,
    fontSize: 20,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginBottom: 15
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  stats: {
    display: "flex",
    flexDirection: "row",
  }
});

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

import db from '../config';

export class HomeScreen extends React.Component{


   constructor() {
    super();
    this.state = {
      like:0,
      dislike:0
    }
  }

  dislikePressed(){
   var dislike=db.ref('Rating/'+'/')
   dislike.update({
     'dislikePressed':1
   })
 }
 likePressed(){
   var like=db.ref('Rating/'+'/')
   like.update({
     'likePressed':1
   })
 }

 likecount=()=>{
   this.setState({like:this.state.like+1})
   }

   dislikecount=()=>{
   this.setState({dislike:this.state.dislike+1})
   }


  render(){
    return(
      <View style={[styles.background]}>

        <View style= {styles.textContainer}>
        <Text style={styles.text}>NEWS  LETTER</Text>
      <TouchableOpacity 
         style={[styles.button,{backgroundColor:"lightgreen"}]} 
       onPress={()=>this.props.navigation.navigate('JokeScreen')}>
         <Text style={styles.buttonText}>Read a Joke</Text>
    </TouchableOpacity>
     <TouchableOpacity            
     style={[styles.button,{backgroundColor:"pink"}]}            
      onPress={()=>this.props.navigation.navigate('Horoscope')}>         
   <Text style={styles.buttonText}>Horoscope</Text>    
   </TouchableOpacity> 
 <TouchableOpacity              
 style={[styles.button,{backgroundColor:"orange"}]}            
   onPress={()=>this.props.navigation.navigate('Weather')}>           
     <Text style={styles.buttonText}>Weather</Text>        
        </TouchableOpacity>          
  <TouchableOpacity            
    style={[styles.button,{backgroundColor:"yellow"}]}            
      onPress={()=>this.props.navigation.navigate('TopNews')}>            
       <Text style={styles.buttonText}>Top News</Text>           
       </TouchableOpacity>

      <TouchableOpacity onPress ={this.likePressed}>
     <Image source={{ uri: "https://e7.pngegg.com/pngimages/886/3/png-clipart-white-and-blue-like-icon-facebook-like-button-computer-icons-thumb-signal-thumbs-up-blue-text.png" }}
      style={{ marginTop: 10, width: 100, height: 100, marginLeft:50}}/>
      </TouchableOpacity> 

      <TouchableOpacity onPress ={this.dislikePressed}>
     <Image source={{ uri: "https://i.pinimg.com/originals/3e/9b/3a/3e9b3a53a629476cf4f01fcf875837bf.png" }}
      style={{ marginTop: -100, width: 100, height: 100, marginLeft:170}}/>
      </TouchableOpacity>

       <Text style={{marginLeft:100}}>{this.state.like}</Text>
        <Text style={{marginLeft:220, marginTop:-20}}>{this.state.dislike}</Text>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:15,
    width : 200,
    height:50,
     marginBottom:10,
  },
  buttonText : {
    textAlign : 'center',
    color : 'darkblack',
    fontWeight: 'bold'
  },
  background:{
   backgroundColor: 'lightblue'
  },
  textContainer:{
    backgroundColor: 'blue',
    height: 60,
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

  export default HomeScreen;
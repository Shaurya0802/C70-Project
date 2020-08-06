import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';

const TextInputBox = (props) => {
    return (
      <TextInput {...props}/>
    );
  }

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Header
                        backgroundColor={'00b8a9'}
                        centerComponent={{
                            text: 'Story Hub',
                            style: { color: '#f8f3d4', fontSize: 20 }
                        }}
                    />
                </View>

                <View style={styles.inputView}>
                     <TextInput style={styles.inputBox} placeholder="Title of the story"/>   
                </View>

                <View style={styles.inputView}>
                     <TextInput style={styles.inputBox} placeholder="Author of the story"/>   
                </View>

                <View style={styles.inputView}>
                    <TextInputBox  style={styles.inputBox2} multiline numberOfLines={10} placeholder="Write Story"/>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={style.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffde7d',
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    inputBox2:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
        alignItems:"center",
        alignSelf:"center"
    },
    buttonText:{
        color:'#f8f3d4',
        fontSize:30,
        fontWeight:"bold"
    }
});
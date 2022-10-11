import React from 'react';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';


import {useState} from 'react'


const Questao02 = () =>{


  const [n1,setn1] = useState(0)
  const [n2,setn2] = useState(0)

  const [resultado,setresultado] = useState(0)



  function somar(){
    var n01 = parseInt(n1)
    var n02 = parseInt(n2)
    setresultado(n01+n02)
  }
  
  function diminuir(){
    var n01 = parseInt(n1)
    var n02 = parseInt(n2)
    setresultado(n01-n02)
  }

  
  function multiplicar(){
    var n01 = parseInt(n1)
    var n02 = parseInt(n2)
    setresultado(n01*n02)
  }

  
  function dividr(){
    var n01 = parseInt(n1)
    var n02 = parseInt(n2)
    setresultado(n01/n02)
  }





  return(
    <View>
    
    <View style={styles.container}>
    <TextInput placeholder={'Numero 01'} style={styles.box} onChangeText={(texto)=>setn1(texto)}/>
    <TextInput placeholder={'Numero 02'} style={styles.box} onChangeText={(texto)=>setn2(texto)}/>
    </View>
    
    <View style={styles.buttons}>
    <Button title={'+'} onPress={somar} style={styles.button}>Numero 01</Button>
    <Button title={'-'} onPress={diminuir} style={styles.button}>Numero 01</Button>
    <Button title={'*'} onPress={multiplicar} style={styles.button}>Numero 01</Button>
    <Button title={'/ '} onPress={dividr} style={styles.button}>Numero 01</Button>
      
    </View>
    <Text>Resultado:{resultado}</Text>
    </View>


  )

}

export default Questao02

const styles = StyleSheet.create({
  box: {
    height: 40,
    margin: 12,
    marginTop: 50,
    width: 140,
    borderWidth: 1,
    backgroundcolor: 'blue'
    

  },
  container:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button:{
      padding: 15,
      width:'60%'
  
  },
  buttons:{
    flexDirection:'column',
    justifyContent: 'space-between',
    margin:10,

  }
});
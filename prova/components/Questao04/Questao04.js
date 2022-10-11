import { View, Text, Image, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

const Questao04 = ()=> {

    const [resultado,setresultado] = useState([])
    const [paises,setpaises] = useState([])

    function calcular(){
      
      var guardarpopulation = 0

      var posicao = 0
   

      for(var i=0;i<paises.length;i++){

        
        if( guardarpopulation< paises[i].population){
          guardarpopulation = paises[i].population
          posicao = i
          setresultado(paises[posicao].name)
        }

      }

      console.log(guardarpopulation)
      console.log(posicao)
      
    }

    useEffect(
        ()=>{

           fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setpaises(resultado)
                
              }
           )
        }
        
    )

    return (
        <View>
          <Text style={styles.title}>Paises:</Text>
            <View style={styles.lista}>
            { paises.map((number) => <Text style={styles.paragraph}>Name:{number.name} Population:{number.population}</Text>)}
             </View>
            <Button title={'Qual mais populoso?'} onPress={calcular}></Button>
            <Text style={styles.texto}>Resultado:{resultado}</Text>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        lista:{
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'center'
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
            margin:10,
        },
        images: {
            flexDirection:'row'
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        button: {
            margin: 15,
            width:'60%'
        },
        paragraph: {
        margin: 1,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
     
      },
       texto:{
         margin: 14,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
       }
    }
)



export default Questao04


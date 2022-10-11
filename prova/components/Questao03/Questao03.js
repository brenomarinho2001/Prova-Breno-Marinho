import { View, Text, Image, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

const MyPokemon = ()=> {

    const [id,setId] = useState(0)
    const [poke,setpoke] = useState([])
    const [frontImage,setFrontImage] = useState('')

    function aumentar(){
      setId(id + 10)
      
    }

    useEffect(
        ()=>{

           fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setpoke(resultado.results)
                setFrontImage(resultado.sprites.front_default)
              }
           )
        }
        
    )

    return (
        <View>
          <Text style={styles.paragraph}>Pokemons:</Text>
            { poke.map((number) => <Text style={styles.texto}>{number.name}</Text>)}
            <View style={styles.images}>
                <Image source={{uri:frontImage,width:150,height:150}} />
            </View>
            <Button title={'Avançar 10 pokemons'} onPress={aumentar}></Button>
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
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20
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
        margin: 24,
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
      },
       texto:{
         margin: 14,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       }
    }
)

export default MyPokemon
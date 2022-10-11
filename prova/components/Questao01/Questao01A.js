
import { Text, View, StyleSheet} from 'react-native';

const Questao1 = (props) => { 
  return(
    <View>
    <Text style={styles.title}>Informações:</Text>
    <Text >Nome:{props.nome}</Text>
    <Text>Sobrenome:{props.sobrenome}</Text>
    <Text>Curso:{props.curso}</Text>
    {props.children}
    </View>
  );

}


const styles = StyleSheet.create({
  title:{
    fontWeight: 'bold',
  },
  texts:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default Questao1
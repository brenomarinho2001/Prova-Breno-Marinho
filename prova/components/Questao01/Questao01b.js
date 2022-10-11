import React from 'react';
import { Text, View} from 'react-native';



const Questao1 = ({nome,sobrenome,curso}) => { 

  const lista = ['FUP', 'Estruturas de Dados', 'Introdução à Computação']

  return(
    <View>

    { lista.map ((number) => <Text>{number}</Text>)}
    </View>
  );

}

export default Questao1
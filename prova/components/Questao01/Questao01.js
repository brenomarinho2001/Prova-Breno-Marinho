import { Text, View} from 'react-native';

import Questao01A from './Questao01A'
import Questao01B from './Questao01b'

const Questao1 = (props) => { 
  return(
    <View>
      <Questao01A nome={'Breno'} sobrenome={'Oliveira'} curso={'DD'}/>
      <Questao01B/>
    </View>
  );

}

export default Questao1
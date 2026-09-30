import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';

class Tela01 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''      
    };
  }

  render() {
    const TAMANHO = 80;
    return (
      <View style={styles.container}>
        
        <View style={ styles.bloco1}></View>

        <View style={ styles.divisor}>
            <Image
                source={  require('../img/logo-barao.png')}
                style={[
                    styles.imagem,
                    {
                        width: TAMANHO,
                        height: TAMANHO,
                        borderRadius: TAMANHO / 2,
                        top: -(TAMANHO) / 2,
                    }
                ]}
            />    
        </View>

        <View style={ styles.bloco2}>
             <Text style={ styles.welcomeText}>Bem-Vindo</Text>
             <Text style={ styles.subText}>Acesse sua conta</Text>
             <TextInput 
                 style={styles.input}
                 placeholder='E-mail'
                 placeholderTextColor="#4caf50"
                 keybordType='email-address'
            />

             <TextInput
                 style={styles.input}
                 placeholder='Senha'
                 placeholderTextColor="#4caf50"
                 keybordType='email-address'
             />
                 <style></style>
        </View>

        <View style={ styles.bloco3}>

        </View>


      </View>
    );
  }
}

export default Tela01;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

bloco1: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,

},

bloco2: {
    flex: 1,
},

bloco3: {
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    height: 50

},

divisor: {
    height: 0,
    overflow: 'visibile',
    zIndex: 10
},

imagem: {
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'black'
},
welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginTop: 60,
    textAlign: 'center'
},
subText: {
    fontSize: 28,
    colo: '#555',
    marginBottom: 30,
    textAlign: 'center'
},
input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'black'    
}

});


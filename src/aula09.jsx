import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Aula09 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campo1: "",
      campo2: "",
      campo3: "",
      campo4: "",
      resultado: "" 
    };
    this.confirmar = this.confirmar.bind(this);
  } 

confirmar() {
    this.setState({
        resultado: `${ this.state.campo1} ${this.state.campo2} ${this.state.campo3} ${this.state.campo4}`,
        campo1 : "",
        campo2 : "",
        campo3 : "",
        campo4 : "",
    })

}
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            value={this.state.campo1}
            style={ styles.input }
            placeholder='Primeiro texto...'
            onChangeText={(t) => this.setState ({ campo1: t })}
        />
              
        <TextInput 
            value={this.state.campo2}
            style={ styles.input }
            placeholder='Segundo texto...'
            onChangeText={(t) => this.setState ({ campo2: t })}
        />
                      
        <TextInput
            value={this.state.campo3} 
            style={ styles.input }
            placeholder='Terceiro texto...'
            onChangeText={(t) => this.setState ({ campo3: t })}
        />
                              
        <TextInput
           value={this.state.campo4} 
           style={ styles.input }
           placeholder='Quarto texto...'
           onChangeText={(t) => this.setState ({ campo4: t })}
        />
        <View style={ styles.botao}>   
                <Button
                    title='Exibir Texto ou clique aqui'
                    onPress={ this.confirmar }
                />
                </View>
        
                <Text style={ styles.textoResultado }>
                    { this.state.resultado }
                </Text>   
        
        </View>
     
    ); 
  }
}

export default Aula09;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   input: {
    width: 300,
    fontSize: 30,
    borderWidth: 6,
    marginBottom: 21
  },
  botao: {
    width: 300,
    fontSize: 30,
    borderWidth: 6,
    marginBottom: 21,
    color: 'red'

  },


  textoResultado: {
    fontSize: 30,
    color: 'red'
  }
});

//Uma tela com 4 campos e um Botão
//Ao clicar no Botâo Mostra Abaixo
//AS informaçôes Inseridas nos Campos

 
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

class Aula06 extends Component {

  constructor(props){
      super (props);

      this.state = {
          nome: 'José',
          sobrenome: '',
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnVplxbPewowYwCnOL_ZFpC4S2RqUTwmptuz3_z4rag&s=10'
    }
      this.mudarNome = this.mudarNome.bind(this);
      this.mudarImagem = this.mudarImagem.bind(this);

  }

  mudarNome() {
       this.setState({
            nome:  'Ronaldinho Gaúcho',
            sobrenome: 'Forteski' 
       })
  }

  mudarImagem(){
      this.setState({
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLicevg0e_852GGgCCS9ltMB_h-MHl13He3OHYIh0lDQ&s=10'
        
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Aliquid inventore autem itaque est ut fugit corporis eius!
                Inventore, quasi eum nulla molestiae delectus, ducimus
                 a voluptates modi itaque eos magni.

            </Text>

            <Text style={{ fontSize: 21, color: 'red', marginTop: 50}}>
              { this.state.nome }  {this.state.sobrenome}
            </Text>

            <Button
            title='Mudar nome'
            onPress={ this.mudarNome }
            
            />
            <Image
                 source={{ uri: this.state.imagem}}
                 style={{ width: 300, height: 300}}

            />
            <Button
            title='Mudar imagem'
            onPress={ this.mudarImagem }
            />
        </ScrollView>
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});


//colocar o sobre nome a fazer aparecer no click do button
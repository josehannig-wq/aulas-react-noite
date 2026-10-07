import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

class Tela02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        email: '',
        senha: '',
        confirmarsenha: '',
        tipoUsuario: 'Aluno'  //Opcoes: aluno, responsavel, professor      
    };
  }

  render() {

    const userTypes= ['Aluno', 'Responsavel', 'Professor'];

    return (
      <ScrollView contentContainerStyle={ styles.scrollContent }>

        <Text style={ styles.title }>Crie sua Conta</Text>
        <Text style={ styles.subtitle}>Preencha os dados</Text>

        <TextInput
            style={ styles.input }
            placeholder='Nome Completo' 
            placeholderTextColor={'#4caf50'}

       />

        <TextInput
            style={ styles.input }
            placeholder='Email' 
            placeholderTextColor={'#4caf50'}

       />

       <TextInput
            style={ styles.input }
            placeholder='Senha' 
            placeholderTextColor={'#4caf50'}

       />

       <TextInput
            style={ styles.input }
            placeholder='Confirme Senha' 
            placeholderTextColor={'#4caf50'}

       />

       <TextInput
            style={ styles.input }
            placeholder='Nome Completo' 
            placeholderTextColor={'#4caf50'}

       />
        {/* SELETOR DE TIPO DE USUARIO: ALUNO RESPONSAVEL E PROFESSOR*/}
        <text style={ styles.label}>Tipo de usuario</text>
        <View style={ styles.userTypeContainer }>
            {userTypes.map((type) => (
                <TouchableOpacity
                    Key={type}
                    style={ [ styles.typeButton, this.state.tipoUsuario === type && styles.activeType]}
                >
                    <Text style= {[ styles.typeText, this.state.tipoUsuario === type && styles.activeTypeText]}>
                        {type}
                    </Text>    
                </TouchableOpacity>
            ))}
        </View>

         <TouchableOpacity style={ styles.button}>
                     <Text style={ styles.buttonText}> Cadastrar </Text>            
         </TouchableOpacity>
         
          <Text style={ styles.footerText }> Já tem uma conta? </Text>            
                      <TouchableOpacity>
                         <Text style={ styles.linkText }>Faça Login</Text>
                         </TouchableOpacity> 

      </ScrollView>

    );
  }
}

export default Tela02;
const styles = StyleSheet.create({
  scrollContent:{
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center' 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 25
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderBlockColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#000'
  },

  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    overflow: 'hidden'
  },
  typeButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#4caf50'
  },
  activeType: {
    backgroundColor: '#4caf50',
  },
  typeText: {
    color: '#4caf50',
    fontWeight: 'bold'
  },
   activeTypeText: {
    color: '#fff'
   },
   
   button:{
    width: '100%',
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius:8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  footerText:{
    color: '#000',
  },

   linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
}
});


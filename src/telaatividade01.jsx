import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image
} from 'react-native';

const Atividade1 = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3a3a3a" />

      {/* Topo escuro */}
      <View style={styles.topBar} />

      {/* Logo */}
      <View style={styles.logoWrapper}>
           <Image 
        source={ require('../img/logo-barao.png')}
        style={{ width: 80, height: 80}}
      />
      </View>

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Bem-Vindo!</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#7aa57a"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#7aa57a"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity>
            <Text style={styles.forgot}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnEntrar} activeOpacity={0.8}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Ainda não tem conta?{' '}
              <Text style={styles.footerLink}>Cadastre-se</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Atividade1;

const GREEN = '#5DB343';
const DARK = '#3a3a3a';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 110,
    backgroundColor: DARK,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  logoWrapper: {
    width: 92,
    height: 92,
    backgroundColor:'black',
    borderRadius: 46,
    alignSelf: 'center',
    marginTop: -46,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
    zIndex: 2,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -2,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 19,
    color: '#333',
    marginBottom: 32,
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1.8,
    borderColor: '#6BBE45',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 14,
  },
  forgot: {
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textDecorationLine: 'underline',
  },
  btnEntrar: {
    height: 48,
    backgroundColor: GREEN,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  footerLink: {
    fontWeight: '700',
    color: '#333',
    textDecorationLine: 'underline',
  },
});
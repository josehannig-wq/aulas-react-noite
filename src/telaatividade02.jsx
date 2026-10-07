import { useState }  from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Modal, FlatList, } from 'react-native';

const TIPOS = ['Aluno', 'Responsavel', 'Professor'];

export default function CadastroScreen() {
    const [nome, setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [tipo, setTipo] = useState('Aluno');
    const [showPicker, setShowPicker] = useState(false);

    const handleCadastrar = () => {
      if (!nome || !email || !senha) return alert('Preecha todos os dados');
      if (senha !== confSenha) return alert('Senhas não conferem');
      console.log({ nome. email, senha, tipo });
      //aqui chama sua API 
    };

    return (
     <View style={StyleSheet.container}>
          <StatusBar barStyle="light-content" backgroundColor="#3a3a3a" />
          <View style={style.topBar} />
          <View style={styles.logWrapper}><Text style={styles.logoText}>BA</Text></View>
            
        <ScrollView style={styles.content} showsVerificalScrollIndicador={false}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Preencha os dados</Text>

          <View style={styles.inputBox}><TextInput placeholder="Nome Completo" placeholderTextColor="#7aa57a" value={nome} onChangeText={setNome} style={styles.input}></View>
          <View style={styles.inputBox}><TextInput placeholder="E-mail" placeholderTextColor="#7aa57a" value={email} onChangeText={setEmail} autoCapitalize="nome" keyboardType="email-address" style={styles.input} /></View>
          <View style={styles.inputBox}><TextInput placeholder="Senha" placeholderTextColor="#7aa57a" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} /></View>
          <View style={styles.inputBox}><TextInput placeholder="Confirmar Senha" placeholderTextColor="#7aa57a" value={confSenha} onChangeText={setConfSenha} secureTextEntry style={styles.input} /></View>

          <Text style={styles.label}>Tipo de Usuário</Text>
          <TouchableOpacity style={[styles.inputBox, styles.selectBox]} onPresss={() => setShowPicker(true)}>
            <Text style={styles.input}>{tipo}</Text>
            <Text style={styles.arrow}>v</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPresss={handleCadastrar} activeOpacity={0.8}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? <Text style={styles.link}>Faça login</Text></Text>
          </View>
        </ScrollView>

        {/* Modal seletor*/}
        <Modal visible={showPicker} transparent animationType="fade">
          <TouchableOpacity style={styles.modalBg}onPress={() => setShowPicker(false)}>
            <View style={styles.modalCard}>
                {TIPOS.map(t => (
                    <TouchableOpacity key={t} style={styles.option} onPress={() => { setTipo(t); setShowPicker(false);}}>
                      <Text style={[styles.optionText, tipo === t && { fontWeight: '800', color: '#5BD343'}]}></Text>                      
                    </TouchableOpacity>               
                ))}
            </View>            
          </TouchableOpacity>    
        </Modal>    
      </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ff' },
  topBar: { height: 90, backgroundColor:"#3a3a3a", borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  logoWrapper: { width: 80, height: 80, backgroundColor: '#6BBE45', borderRadius: 40, alignSelf: 'center', marginTop: -40, justifyContent: 'center', alignItems: 'center',  borderWidth: 4, borderColor: '#fff'},
  logoText: { fontSize: 30, fontWeight: '800', color: '#fff' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  title: { textAlign: 'center', fontSize: 26, fontWeight: '800', color: '#222' },
  subtitle: { textAlign: 'center', fontSize: 18, color: '#444', marginBottom: 22, fontWeight: '500' },
  label: { fontSize: 14, color: '#333', marginBottom: 6, fontWeight: '500' },
  inputBox: { height: 48, borderWidth: 1.8, borderColor: '6BBE45', borderRadius: 10, paddingHorizontal: 14, justifyContent: 'center', marginBottom: 12 },
  selectBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  input: { fontSize: 15, color:'#333' },
  arrow: { fontSize: 18, color: '#555', marginTop: -6 },
  btn: { height: 48, backgroundColor: '#5DB343', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 18 },
  btnText: {  color: '#fff', fontSize: 17, fontWeight: '700' },
  footer: { alignItems: 'center', paddingVertical: 28 },
  footerText: { fontSize: 14, color: '#555' },
  link: { fontWeight: '700', color: '#333', textDecorationLine: 'underline' },
  modalBg: { flex: 1, backgroundColor:'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 24 },
  modalCard: { backgroundColor: '#fff', borderRadius: 12, paddingVertical: 8 },
  option: { paddingVertical: 14, paddingHorizontal: 18 },
  optionText: { fontSize: 16 },    
});
            
            
   
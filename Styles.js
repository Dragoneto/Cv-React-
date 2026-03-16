import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container_contato: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  container_home: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_icone_voltar_contato: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  view_texto_contato: {
    marginVertical: 30,
  },
  texto_contato: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  input_contato: {
    width: '100%',
    maxWidth: 400,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  inputArea: {
    width: '100%',
    maxWidth: 400,
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;
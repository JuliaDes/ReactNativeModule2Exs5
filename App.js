import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.text}>Félicitaions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
     backgroundColor: 'green',
     width: '60%',
     paddingVertical: 50,
     borderRadius: 10,
     borderWidth: 2,
     borderColor: 'black',
     shadowColor: 'black',
     shadowOpacity: 0.7,
     shadowRadius: 5,
     shadowOffset: {width: 7, hight: 18}
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
});
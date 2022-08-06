import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  const [location, setLocation] = useState('Buenos Aires');
  const [modal, setModal] = useState(false);

  const ciudades = [
    {ciudad: 'Buenos Aires'},
    {ciudad: 'Santiago'},
    {ciudad: 'Brasilia'},
    {ciudad: 'Sao Paulo'},
    {ciudad: 'Sao Paulo'},
  ];

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{location}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModal(true)}>
            <Text>Seleccionar Ciudad</Text>
          </TouchableOpacity>
        </View>
        {<View></View>}

        <Modal
          visible={modal}
          animationType="slide"
          transparent={false}
          onDismiss={() => setModal(false)}>
          {ciudades.map((ciudad, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.modal}
                onPress={() => {
                  setLocation(ciudad.ciudad);
                  setModal(false);
                }}>
                <Text>{ciudad.ciudad}</Text>
                <Text style={{fontWeight: 'bold'}}>Seleccionar</Text>
              </TouchableOpacity>
            );
          })}
        </Modal>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bcd4',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: '#cccc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});


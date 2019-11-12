import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const func = () => {
    setCount(count + 1);
    Alert.alert('Button with adjusted color pressed');
  };
  return (
    <View style={styles.container}>
      <Button color="#f194ff" title="button" onPress={func} />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{count}</Text>
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
  button: {
    backgroundColor: '#ddd',
    color: '#f1f1f1',
  },
});

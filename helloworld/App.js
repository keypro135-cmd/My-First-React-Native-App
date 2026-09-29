import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [fullname, setFullname] = useState("Andrii");

  return (
    <View>
      <Text style={styles.paragraph}>
        Hello, World, {fullname}
      </Text>

      <TextInput
        onChangeText={(text) => setFullname(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
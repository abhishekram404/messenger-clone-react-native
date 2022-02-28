import React from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';

const CreateMessage = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconPressable}>
        <Image source={require('./assets/Actions.png')} />
      </Pressable>
      <Pressable style={styles.iconPressable}>
        <Image source={require('./assets/Gallery.png')} />
      </Pressable>
      <Pressable style={styles.iconPressable}>
        <Image source={require('./assets/Audio.png')} />
      </Pressable>
      <TextInput style={styles.inputBox} placeholder="Aa" />
      <Pressable style={styles.iconPressable}>
        <Image source={require('./assets/Like.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    backgroundColor: '#3e4042',
    borderRadius: 30,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 15,
    flex: 1,
  },
  iconPressable: {
    padding: 10,
  },
});
export default CreateMessage;

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ReceivedMessage = ({text}: {text: string}) => {
  return (
    <View style={styles.receivedMessageContainer}>
      <Image
        source={require('./assets/profile.png')}
        style={styles.profilePic}
      />
      <View style={styles.receivedMessage}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receivedMessageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  receivedMessage: {
    backgroundColor: '#3e4042',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
  },
});
export default ReceivedMessage;

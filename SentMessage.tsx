import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const SentMessage = ({text}: {text: string}) => {
  return (
    <View style={styles.sentMessage}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#006AFF',
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
  },
});
export default SentMessage;

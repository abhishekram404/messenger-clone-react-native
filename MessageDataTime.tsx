import {StyleSheet, Text} from 'react-native';
import React from 'react';
const MessageDateTime = () => {
  return <Text style={styles.dateTime}>Sun 10:56 AM</Text>;
};

const styles = StyleSheet.create({
  dateTime: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#aaa',
  },
});

export default MessageDateTime;

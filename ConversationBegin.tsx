import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ConversationBegin = () => {
  return (
    <View style={styles.conversationBegin}>
      <View style={styles.innerWrapper}>
        <Image
          source={require('./assets/profile.png')}
          style={styles.profilePicBig}
        />
        <Text style={styles.userName}>Abhishek Ram</Text>
        <Text style={styles.baseText}>You're friends on Facebook.</Text>
        <Text style={styles.baseText}>Works at Nowhere</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conversationBegin: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginBottom: 10,
  },
  innerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicBig: {
    borderRadius: 50,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  baseText: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 7,
  },
});
export default ConversationBegin;

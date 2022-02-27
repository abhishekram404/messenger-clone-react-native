import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navbarRight}>
        <Image
          source={require('./assets/profile.png')}
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Abhishek Ram</Text>
      </View>
      <View style={styles.navbarIcons}>
        <Image source={require('./assets/Call.png')} style={styles.icon} />
        <Image source={require('./assets/videocall.png')} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: 15,
    shadowColor: '#f00',
    shadowOpacity: 1,
  },
  navbarRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: '500',
    fontSize: 15,
  },
  navbarIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
export default Navbar;

import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

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
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#006AFF50' : 'transparent',
            },
            styles.iconPressable,
          ]}>
          <Image source={require('./assets/Call.png')} style={styles.icon} />
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#006AFF50' : 'transparent',
            },
            styles.iconPressable,
          ]}>
          <Image
            source={require('./assets/videocall.png')}
            style={styles.icon}
          />
        </Pressable>
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
    backgroundColor: '#242526',
    padding: 15,
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
  iconPressable: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  icon: {},
});
export default Navbar;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import Conversation from './Conversation';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Conversation />
      {/* <View>
        <Text>Footer</Text>
      </View> */}
    </>
  );
};

export default App;

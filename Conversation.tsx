import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ConversationBegin from './ConversationBegin';
import MessageDateTime from './MessageDataTime';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const Conversation = () => {
  return (
    <ScrollView>
      <ConversationBegin />
      <View style={styles.messagesList}>
        <MessageDateTime />

        <ReceivedMessage text="Hello" />
        <ReceivedMessage text="Recognize me?" />
        <ReceivedMessage text="I'm  Abhishek" />
        <ReceivedMessage text="New react native learner" />
        <SentMessage text="Hey" />
        <SentMessage text="I know you, buddy" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
        <SentMessage text="How are you?" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messagesList: {
    display: 'flex',
    paddingHorizontal: 7,
  },
});

export default Conversation;

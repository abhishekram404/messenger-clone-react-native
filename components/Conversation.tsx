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

        <ReceivedMessage text="Hey!" />
        <ReceivedMessage text="Recognize me?" />
        <SentMessage text="Hey" />
        <SentMessage text="I know you, buddy" />
        <SentMessage text="How are you?" />
        <SentMessage text="Long time no see" />
        <SentMessage text="Huh?" />
        <ReceivedMessage text="Have been a bit busy these days." />
        <ReceivedMessage text="learning react native" />
        <MessageDateTime />

        <SentMessage text="Oh!" />
        <SentMessage text="That's great" />
        <SentMessage text="How is it?" />
        <SentMessage text="Tell me about your experience with react native ?" />
        <ReceivedMessage text="Well! I am having a great time with native" />
        <ReceivedMessage text="It's super easy to learn and understand" />
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

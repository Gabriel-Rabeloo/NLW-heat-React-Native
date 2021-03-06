import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      <SendMessageForm />
    </View>
  );
};

import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      <SignInBox />
    </View>
  );
};

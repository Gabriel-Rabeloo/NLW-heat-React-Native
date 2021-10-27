import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export const MessageList = () => {
  const message = {
    id: '1',
    text: 'mensagem de teste',
    user: {
      name: 'Gabriel',
      avatar_url: 'https://github.com/gabriel-rabeloo.png',
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
};

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';
import LogoSvg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <UserPhoto imageUri="https://github.com/gabriel-rabeloo.png" />
    </View>
  );
};

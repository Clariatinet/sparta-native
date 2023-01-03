import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from '@emotion/native';

export default function App() {
  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledButton title='Javascript' />
        <Button title='React' />
        <Button title='Coding Test' />
      </StyledView>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  padding-top: 20px;
`;

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const StyledButton = styled.Button`
  background-color: red;
  color: red;
`;

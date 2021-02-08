import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';

interface Props {
  children: ReactNode | ReactNode[];
}

const Container: FC<Props> = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar />
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Container;

import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import { Article } from '../screens/Home';

interface Props {
  item: Article;
  onPress: (e: GestureResponderEvent) => void;
}

const ListItem: FC<Props> = ({ item, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.primaryText}>{item.title}</Text>
      <Text>{item.subtitle}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    marginVertical: 16,
    marginHorizontal: 30,
  },
  primaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ListItem;

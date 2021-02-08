import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SavedArticles = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  return (
    <View style={styles.container}>
      {Object.values(articles).map((article) => (
        <Text style={styles.text} key={article.id}>
          {article.title}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 16,
  },
  text: {
    marginTop: 30,
  },
});

export default SavedArticles;

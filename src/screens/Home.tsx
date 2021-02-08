import React, { FC, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import Container from '../common/Container';
import ListItem from '../common/ListItem';
import { StackNavigationProp } from '@react-navigation/stack';

export interface Article {
  id: number;
  title: string;
  subtitle: string;
}

type HomeNavigationProp = StackNavigationProp<
  { Home: undefined; ArticleDetail: { id: number } },
  'Home'
>;

export interface Props {
  navigation: HomeNavigationProp;
}

const Home: FC<Props> = ({ navigation }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(
          'https://apps-tests.s3-eu-west-1.amazonaws.com/react-native/articles.json',
        );
        const data = await response.json();
        setArticles(data);
        console.log('data', data);
      } catch (e) {
        console.log(e);
      }
    };
    getArticles();
  }, []);

  const renderItem: ListRenderItem<Article> = ({ item }) => (
    <ListItem
      item={item}
      onPress={() => navigation.push('ArticleDetail', { id: item.id })}
    />
  );

  return (
    <Container>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
};

export default Home;

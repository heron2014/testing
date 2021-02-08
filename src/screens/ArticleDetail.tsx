import React, { FC, useEffect, useState } from 'react';
import Container from '../common/Container';
import { Button, Text, View } from 'react-native';
import { Article } from './Home';
import { useDispatch } from 'react-redux';
import { saveArticle } from '../redux/actions';
import { RouteProp } from '@react-navigation/native';

interface IArticleDetail extends Article {
  content: string;
  image: string;
}

type ArticleDetailNavigationProp = RouteProp<
  { ArticleDetail: { id: number } },
  'ArticleDetail'
>;

export interface Props {
  route: ArticleDetailNavigationProp;
}

const ArticleDetail: FC<Props> = ({
  route: {
    params: { id },
  },
}) => {
  const [article, setArticle] = useState<IArticleDetail | null>(null);
  const dispatch = useDispatch();
  const handleSaveArticle = () => {
    if (article) {
      dispatch(saveArticle(id, article));
    }
  };
  useEffect(() => {
    const getArticleById = async () => {
      const res = await fetch(
        `https://apps-tests.s3-eu-west-1.amazonaws.com/react-native/article/${id}.json`,
      );
      const article = await res.json();
      setArticle(article);
    };
    getArticleById();
  }, [id]);

  if (!article) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Container>
      <Text>{article?.title}</Text>
      <Text>{article?.subtitle}</Text>
      <Button title="Save" onPress={handleSaveArticle} />
    </Container>
  );
};

export default ArticleDetail;

import {FC} from 'react';
import useGetUserTopAlbums from '../../data/hooks/useGetUserTopAlbums';
import {Text} from 'react-native';

const HomeScreen: FC = () => {
  const {data} = useGetUserTopAlbums(10);

  return <Text>{'HOME'}</Text>;
};

export default HomeScreen;

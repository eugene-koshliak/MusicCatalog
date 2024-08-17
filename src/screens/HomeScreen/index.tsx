import {FC} from 'react';
import useGetTopArtists from '../../data/hooks/useGetTopArtists';
import {Text} from 'react-native';

const HomeScreen: FC = () => {
  const {data} = useGetTopArtists(10);

  return <Text>{'HOME'}</Text>;
};

export default HomeScreen;

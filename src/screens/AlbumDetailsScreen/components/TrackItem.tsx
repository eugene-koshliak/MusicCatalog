import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatTimeToMinutes} from '../../../utils/TimeUtil';

interface Props {
  name: string;
  duration: number;
}

const TrackItem: FC<Props> = ({name, duration}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{formatTimeToMinutes(duration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default TrackItem;

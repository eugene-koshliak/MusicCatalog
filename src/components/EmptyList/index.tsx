import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyList: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{'No data found'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EmptyList;

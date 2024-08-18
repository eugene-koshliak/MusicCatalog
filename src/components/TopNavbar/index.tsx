import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackArrowIcon from '../../assets/icons/BackArrowIcon';

export interface Props {
  title?: string;
}

const TopNavbar: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftElement}>
        <BackArrowIcon />
      </View>
      {title && title.length > 0 ? (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      ) : null}
      <View style={styles.rightElement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  leftElement: {
    alignItems: 'flex-start',
    flexBasis: '25%',
  },
  rightElement: {
    alignItems: 'flex-end',
    flexBasis: '25%',
  },
  title: {
    maxWidth: '50%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopNavbar;

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Heading = props => {
  const {headingText, headingStyle} = props;
  return <Text style={[styles.heading, headingStyle]}>{headingText}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '800',
  },
});

export default Heading;

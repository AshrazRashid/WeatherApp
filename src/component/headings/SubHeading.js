import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SubHeading = props => {
  const {headingText, headingStyle} = props;
  return <Text style={[styles.heading, headingStyle]}>{headingText}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default SubHeading;

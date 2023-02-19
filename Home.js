import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.globalLogo} source={require('./logo.png')} />
      <Text style={styles.title}>Welcome to GlobalTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

const introText = 'Text intro text for first application';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    textAlign: 'center',
    paddingTop: 10,
  },
  globalLogo: {
    height: 200,
    width: 400,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular',
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: 300,
  },
});

export default Home;

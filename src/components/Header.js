import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet, Dimensions, View} from 'react-native';

const Newbutton = props => {
  return (
    <Button
      title={props.title}
      buttonStyle={[styles.btn, props.cusStyle]}
      titleStyle={props.titStyle}
      onPress={props.pressed}
    />
  );
};

const Header = props => {
  return (
    <View style={styles.viewHeader}>
      <Newbutton title="Like All" pressed={props.pressedOne} />
      <Newbutton
        title="Reset All"
        cusStyle={{backgroundColor: 'white'}}
        titStyle={{color: 'black'}}
        pressed={props.pressedTwo}
      />
      <Newbutton
        title="Dislike All"
        cusStyle={{backgroundColor: 'rgb(209, 69, 81)'}}
        pressed={props.pressedThree}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width / 3.7,
    height: 32,
    borderRadius: 7,
  },
  viewHeader: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

export default Header;

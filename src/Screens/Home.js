import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Roboto} from '../configuration/Font';
import {Button} from 'react-native-elements';
import Header from '../components/Header';
import {connect} from 'react-redux';
import fetchAllData from '../_stores/items';

import {GET_ALL, ACTION, ACTION_ALL} from '../configuration/constans';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.handleGetData();
  }

  handleGetData = () => {
    this.props.fetchAllData(GET_ALL, null);
  };

  handleAction = (action, id) => {
    let newData = this.props.items.data.filter(Items => Items.id == id);
    if (action == 'like') newData.map(data => (data.likes += 1));
    else newData.map(data => (data.likes -= 1));
    this.props.fetchAllData(ACTION, newData, id);
  };

  handleActionAll = action => {
    let newData = this.props.items.data.map(item => {
      if (action === 'like') item.likes += 1;
      else if (action === 'reset') item.likes = 0;
      else item.likes -= 1;
      return item;
    });
    this.props.fetchAllData(ACTION_ALL, newData);
  };

  renderItem = (id, image, likes, index) => {
    const ioz = index != 0 ? {marginTop: 15} : {marginTop: 0};
    return (
      <View style={[styles.viewRenderItem, ioz]}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.action}>
          <View style={styles.viewText}>
            <Text style={[styles.text, {color: 'grey'}]}>{likes} Like</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              title="Like"
              buttonStyle={styles.secondBtn}
              titleStyle={styles.text}
              onPress={() => this.handleAction('like', id)}
            />
            <Button
              title="Dislike"
              titleStyle={styles.text}
              buttonStyle={[styles.secondBtn, styles.redColor]}
              onPress={() => this.handleAction('dislike', id)}
            />
          </View>
        </View>
      </View>
    );
  };

  listItem = data => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) =>
          this.renderItem(item.id, item.image, item.likes, index)
        }
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  render() {
    const {data} = this.props.items;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(63, 97, 181, 1)"
          barStyle="light-content"
        />
        <Header
          pressedOne={() => this.handleActionAll('like')}
          pressedTwo={() => this.handleActionAll('reset')}
          pressedThree={() => this.handleActionAll('dislike')}
        />
        {this.listItem(data)}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  fetchAllData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 235, 242, 0.5)',
  },
  text: {
    fontFamily: Roboto,
    fontSize: 16,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  viewRenderItem: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  secondBtn: {
    height: 32,
    width: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  redColor: {
    backgroundColor: 'rgb(209, 69, 81)',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  viewText: {
    height: 35,
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 250, 250, 0.7)',
  },
});

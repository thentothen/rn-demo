import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Divider, Avatar, Icon} from 'react-native-paper';
import Swiper from 'react-native-swiper';
export default function ({navigation}) {
  const scrollData = [
    {
      icon: 'food-outline',
      tips: '',
      text: '原料配方揭秘',
    },
    {
      icon: 'food-fork-drink',
      text: '阿喜熟客群',
    },
    {
      icon: 'account-supervisor',
      text: '成为合伙人',
    },
    {
      icon: 'redhat',
      text: '学子卡',
    },
    {
      icon: 'card-account-details',
      text: '喜卡',
    },
    {
      icon: 'account-group',
      text: '一起喝',
    },
  ];
  console.log(scrollData);
  function pressQRCode() {
    navigation.navigate('scoreShow', {a: 1});
  }
  return (
    <ScrollView>
      <View style={{height: 300}}>
        <Swiper
          style={styles.swiper}
          height={300}
          horizontal={true}
          loop={true}
          autoplay={true}
          autoplayTimeout={2}
          paginationStyle={{bottom: 10}}
          showsButtons={false}>
          <Image
            source={require('../../assets/image/1.png')}
            style={styles.img}
          />
          <Image
            source={require('../../assets/image/2.png')}
            style={styles.img}
          />
          <Image
            source={require('../../assets/image/3.png')}
            style={styles.img}
          />
          <Image
            source={require('../../assets/image/4.png')}
            style={styles.img}
          />
        </Swiper>
      </View>

      <View style={styles.self}>
        <View>
          <View style={styles.selfTop}>
            <View>
              <View style={{marginBottom: 10, ...styles.displayRow}}>
                <Text style={{marginRight: 5, fontSize: 25}}>等风来</Text>
                <Text style={{fontWeight: 'bold'}}>黑卡贵宾</Text>
              </View>
              <View style={styles.displayRow}>
                <Text style={{marginRight: 6}}>喜茶卷</Text>
                <Text style={{marginRight: 20}}>0</Text>
                <Text style={{marginRight: 6}}>积分</Text>
                <Text>421</Text>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={pressQRCode}>
              <Avatar.Icon
                size={50}
                icon="qrcode"
                color="white"
                style={{backgroundColor: '#f1c232'}}
              />
            </TouchableWithoutFeedback>
          </View>
          <Divider style={styles.divider} />
          <View style={{justifyContent: 'space-between', ...styles.displayRow}}>
            <View style={styles.displayRow}>
              <Icon source="gift" size={20} color="#f1c232" />
              <Text>有一份生日礼物等待激活</Text>
            </View>
            <Icon source="chevron-right" size={20} />
          </View>
        </View>
      </View>

      <View style={{...styles.self, height: 180}}>
        <View style={styles.secondCard}>
          <View style={styles.secondCardTopItem}>
            <Text style={styles.card2Title}>到店自取</Text>
            <Text style={{color: '#666666', fontSize: 12}}>提前下单免排队</Text>
          </View>
          <View
            style={{
              width: 1,
              height: 40,
              backgroundColor: '#666',
            }}
          />
          <View style={styles.secondCardTopItem}>
            <Text style={styles.card2Title}>喜外送</Text>
            <Text style={{color: '#666', fontSize: 12}}>随时送喜到家</Text>
          </View>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.displayRow}>
              {scrollData.map(item => (
                <View
                  style={{alignItems: 'center', margin: 10}}
                  key={item.text}>
                  <Icon source={item.icon} size={40} color="#f1c232"></Icon>
                  <Text style={{fontSize: 12, marginTop: 10}}>{item.text}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  swiper: {},
  img: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  self: {
    height: 150,
    marginLeft: 20,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: -10,
    marginBottom: 20,
  },
  selfTop: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  displayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondCard: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondCardTopItem: {
    alignItems: 'center',
  },
  card2Title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

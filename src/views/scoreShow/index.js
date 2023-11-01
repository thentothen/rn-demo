import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ChildC from './child.js';
export default function ({route, navigation}) {
  const [cnt, setCnt] = useState(0);
  function press() {
    console.log(111);
  }
  function childChange() {
    console.log(1123);
    setCnt(cnt + 1);
  }
  return (
    <ScrollView alwaysBounceVertical>
      <View style={{padding: 20}}>
        <ChildC onChange={childChange} cnt={cnt}></ChildC>
        <Text onPress={press}>123</Text>
      </View>
    </ScrollView>
  );
}

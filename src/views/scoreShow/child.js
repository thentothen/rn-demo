import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useState} from 'react';
export default function (props) {
  const [cnt, setCnt] = useState(0);
  const press = () => {
    // setCnt(cnt + 1);
    props.onChange();
  };
  return (
    <View>
      <Button onPress={press}>button</Button>
      <Text>{props.cnt}</Text>
    </View>
  );
}

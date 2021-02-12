import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar,TextInput,Button } from 'react-native-paper';

import Displaylove from './components/Displaylove';
export default class App extends React.Component {
  
  state={
    fname:'',
    sname:'',
    result:"loading"
  }
submitit()
{
fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
headers:{
  "x-rapidapi-host": "love-calculator.p.rapidapi.com",
  "x-rapidapi-key": "8a77f9e494msh82716613b999ab7p1de30bjsn6dc44a841b60",

}
})
.then(data => data.json())
.then(data2 => {
// console.log(data2)
this.setState({
  result:data2
})
}) 

}
  render(){
  return (
    <View style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="Love % Calculator" 
      style={{alignItems:"center"}}/>
      </Appbar.Header>
      <TextInput
      label="Person 1(Male)"
      value={this.state.fname}
      onChangeText={text => this.setState({fname:text})}
    />
    <TextInput
      label="Person 2(Female)"
      value={this.state.sname}
      onChangeText={text => this.setState({sname:text})}
    />
     <Button style={{margin:10}} 
     mode="contained" 
     onPress={this.submitit.bind(this)}>
    Calculate
  </Button>

  <Displaylove data ={this.state.result}></Displaylove>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});

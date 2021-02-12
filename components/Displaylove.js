import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Displaylove=(prop)=>
{
    // console.log(prop.data)
    if(prop.data=="loading")
    {
        return <Text  style={styles.text}>Please wait....</Text>
    }
    if(prop.data.message)
    {
        return <Text  style={styles.text}>Sorry Something went wrong. Try again</Text>
    }
    else{
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Percentage = {prop.data.percentage} %</Text>
        <Text style={styles.text}>Result  = {prop.data.result} </Text> 
    </View>
) 
    }

  
}
export default Displaylove;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    text:
    {
        fontSize:30, 
        textAlign:"center"  
    }
});
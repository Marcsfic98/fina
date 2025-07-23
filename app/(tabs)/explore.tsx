import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
   <ScrollView style={styles.container}>
     <View>
      <Text>Hello word</Text>
    </View>
   </ScrollView>
  );
}

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#958a8aff",
     
    }
})


import { Image, View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { stylesAcount } from './stylesAcount'
import FormLogIn from './FormLogIn'

export default function IndexScreen() {

  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: "100%", backgroundColor: ColorBlue}}>
        <View><Image style={stylesAcount.imgBookSmall} source={require('../../assets/images/books.png')} /></View>
      </View>

      <View style={{flex: 3}}>

        <FormLogIn />
        
        <View style={{marginTop:50}} />
      </View>

    </View>
  );
}

const ColorBlue = "#3b63ff";
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f4f4f4"
  },
});

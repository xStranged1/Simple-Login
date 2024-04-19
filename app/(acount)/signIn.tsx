import { Button, Image, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { stylesAcount } from './stylesAcount'

export default function SignInScreen() {
  const colorFondo = ""
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:"#3b63ff"}}>
        
        <View style={{marginTop: 100}}><Image style={styles.imgBook} source={require('../../assets/images/books.png')} /></View>
        
        
        <View>
        <Link href="./index" asChild>
          <Pressable style={stylesAcount.btnSign}>
            <Text>Sign In</Text>
          </Pressable>
        </Link>

          <View style={{paddingTop: 20, backgroundColor: "#3b63ff"}} />
          <Pressable onPress={()=>{
            console.log('gola');
            
          }} style={stylesAcount.btnSign}>
            <Text>Sign up</Text>
          </Pressable>
        <View style={{paddingBottom: 70, backgroundColor: "#3b63ff"}} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3b63ff"
  },
  imgBook: {
    width: 150,
    height: 150
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

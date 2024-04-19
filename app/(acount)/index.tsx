import { Button, Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { stylesAcount } from './stylesAcount'

export default function IndexScreen() {

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:"#3b63ff"}}>
        
        <View style={{marginTop: 130}}><Image style={stylesAcount.imgBook} source={require('../../assets/images/books.png')} /></View>
        
        <View>
          
          <View style={{backgroundColor: "#3b63ff"}}>
            <Link href="./signIn" style={stylesAcount.btnSign} asChild>
              <Pressable>
                <Text style={stylesAcount.textBtn}>Iniciar sesión</Text>
              </Pressable>
            </Link>
          </View>

            <View style={{paddingTop: 20, backgroundColor: "#3b63ff"}} />

          <View style={{backgroundColor: "#3b63ff"}}>
            <Pressable style={stylesAcount.btnSign} onPress={()=>{
              console.log('hola');
            }} >
              <Text style={stylesAcount.textBtn}>Sign up</Text>
            </Pressable>
          </View>
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
});

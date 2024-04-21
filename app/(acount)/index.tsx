import { Image, Text, View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { stylesAcount } from './stylesAcount'
import { styles } from '../styles';
export default function IndexScreen() {

  return (
    <View style={[styles.container, {backgroundColor: "#3b63ff"}]}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:"#3b63ff"}}>
        
        <View style={{marginTop: 130}}><Image style={stylesAcount.imgBook} source={require('../../assets/images/books.png')} /></View>
        
        <View>
          
          <View style={stylesAcount.bgBlue}>
            <Link href="./login" style={stylesAcount.btnSign} asChild>
              <Pressable>
                <Text style={stylesAcount.textBtn}>Iniciar sesión</Text>
              </Pressable>
            </Link>
          </View>

            <View style={[stylesAcount.bgBlue,{paddingTop: 20}]} />

          <View style={stylesAcount.bgBlue}>
            <Link href="./signUp" style={stylesAcount.btnSign} asChild>
              <Pressable>
                <Text style={stylesAcount.textBtn}>Registrarse</Text>
              </Pressable>
            </Link>
          </View>
          <View style={[stylesAcount.bgBlue,{paddingBottom: 70}]} />
        </View>

      </View>

    </View>
  );
}


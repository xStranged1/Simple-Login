import { memo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from '../styles';
import { stylesAcount } from "./stylesAcount";
import { Link } from "expo-router";

const FormLogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <View style={stylesAcount.viewInput}>
                    <TextInput value={email} placeholder="Email" onChangeText={(value) => setEmail(value)} />
                </View>
            </View>
            <View style={{marginVertical:10}} />
            <View style={{flexDirection: "row"}}>
                <View style={stylesAcount.viewInput}>
                    <TextInput 
                        value={password} 
                        placeholder="Password" 
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
            </View>
            <View style={{marginTop: 60}}>
                <Link href="./login" style={[stylesAcount.btnSign, {backgroundColor: "#3b63ff"}]} asChild>
                    <Pressable>
                    <Text style={stylesAcount.textBtn}>Iniciar sesión</Text>
                    </Pressable>
                </Link>
                <Link href="./forgotPassword" style={{marginTop:10}} asChild>
                    <Pressable>
                    <Text style={stylesAcount.textForgotPassword}>Olvidaste tu contraseña?</Text>
                    </Pressable>
                </Link>
            </View>

        </View>
    )

};export default memo(FormLogIn)
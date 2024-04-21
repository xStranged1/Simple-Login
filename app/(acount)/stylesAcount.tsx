import { StyleSheet } from "react-native";

const backgroundColorBlue = "#3b63ff"
export const stylesAcount = StyleSheet.create({
    btnSign: {
        width: 300,
        height: 42,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ddd",
        color: "#3b63ff"
      },
    textBtn: {
     color: "#222",
     fontSize: 15,
     fontWeight: '500',
    },
    imgBook: {
        width: 150,
        height: 150
      },
    imgBookSmall: {
      width: 130,
      height: 130
    },
    bgBlue: {
      backgroundColor: backgroundColorBlue
    },
    viewInput: {
      backgroundColor: "#ddd",
      flex: 1,
      justifyContent: "center",
      height: 34,
      paddingHorizontal: 10,
      borderRadius: 4
    },
    textForgotPassword: {
      color: "#888",
    }
});
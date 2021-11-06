import { StyleSheet } from "react-native"
import { FONTS } from "../../theme/fonts"

export const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "#CCC",
        borderWidth: 1,
        borderRadius: 8,
        padding: 6,
        
    },
    title: {
        fontFamily: FONTS.BOLD
    },
    icon: {
        marginRight: 10
    }

})
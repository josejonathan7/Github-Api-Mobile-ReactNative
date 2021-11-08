import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    message: {
        color: "#FFF",
        fontSize: 24,
        fontFamily: FONTS.BOLD,
        padding: 15
    }
})
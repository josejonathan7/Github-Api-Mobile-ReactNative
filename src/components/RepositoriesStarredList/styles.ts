import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        borderColor: "#CCC",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8,
        width: "100%",
        padding: 8,
        marginBottom: 20
    },   
    userNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userFullName: {
        flexDirection: "row",
        alignItems: "center"
    }
})
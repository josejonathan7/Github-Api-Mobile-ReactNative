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
        paddingTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    text: {
        flexShrink: 1,
        color: "#00BFFF",
        borderBottomColor: "#00BFFF",
        marginLeft: 10
    }
})
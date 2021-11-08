import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:  getStatusBarHeight() + 17,
        backgroundColor: "#121214",
        alignItems: "center",
    },
    header: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    repositoriesList: {
        width: "90%",
        flex: 1,
        paddingHorizontal: 20
    },
    content: {
        paddingTop: 135,
        paddingBottom: 185
    }
})
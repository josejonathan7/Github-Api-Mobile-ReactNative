import { StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
       
    },
    title: {
        fontSize: 24,
        fontFamily: FONTS.BOLD,
        color: "#FFF",
        marginBottom: 20,
    },
    userInfoContainer:{
        display: "flex",
        flexDirection: "row",
    },
    userInfo: {
        fontSize: 18,
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        padding: 15
    },
    userStatisticsContainer: {
        flexDirection: "row",
    },
    userStatisticsView: {
        padding: 15,
        alignItems: "center"
    },
    userStatistics: {
        color: COLORS.WHITE
    },
    buttonGroup: {
        flexDirection: "row",
        padding: 10
    }
})
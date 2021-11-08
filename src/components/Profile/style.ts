import { StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
        width: "100%"
    },
    title: {
        fontSize: 24,
        fontFamily: FONTS.BOLD,
        color: "#FFF",
        marginBottom: 20,
        marginTop: 20,
    },
    userInfoContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap:"wrap"
    },
    userInfo: {
        fontSize: 16,
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        padding: 10
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
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    }
})
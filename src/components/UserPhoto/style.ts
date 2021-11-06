import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderWidth: 4,
        borderColor: COLORS.BLACK_SECONDARY
    }
})
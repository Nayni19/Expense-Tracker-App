import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles";
import getFormattedDate from "../../util/date";

const ExpenseItem = ({ desc, date, amount }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.press}>
      <View style={styles.root}>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>{desc}</Text>
          <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amtContainer}>
          <Text style={styles.amtText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: GlobalStyles.colors.primary700,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
  },
  descContainer: {
    paddingVertical: 8,
  },
  descText: {
    color: GlobalStyles.colors.primary100,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
  dateText: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
  },
  amtContainer: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
  },
  amtText: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  press: {
    opacity: 0.75,
  },
});

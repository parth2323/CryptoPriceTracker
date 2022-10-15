import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  rank: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;

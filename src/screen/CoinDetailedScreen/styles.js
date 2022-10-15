import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --------HEADER----------
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  symbolContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolTitle: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  // -------------------Coin Price Details--------------------------

  coinPricetext: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },

  coinPriceDetailsContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentageChangeContainerText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  percentageChangeContainer: {
    backgroundColor: "#EA3943",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    paddingVertical: 7,
  },

  input: {
    color: "white",
    flex: 1,
    height: 40,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 15,
  },
});

export default styles;

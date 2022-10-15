import { Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CointItem = ({ marketCoin }) => {
  const {
    name,
    image,
    symbol,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
    current_price,
  } = marketCoin;

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    }
    if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    }
    if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    }
    if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return 10;
  };

  const percentageColor =
    price_change_percentage_24h < 0 ? "#EA3943" : "#16C784";

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 35,
          width: 35,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#585858",
              borderRadius: 5,
              paddingHorizontal: 5,
              marginRight: 5,
            }}
          >
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.text}>{current_price}</Text>
        <Text style={{ color: "white" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CointItem;

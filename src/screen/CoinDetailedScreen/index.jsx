//Part 1: 2:29:00 (Chart)

import React, { useState } from "react";
import { View, Text, Dimensions, TextInput } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

import styles from "./styles";

import CointDetailedHeader from "./CointDetailedHeader.jsx";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#EA3943" : "#16C784";

  const screenWidth = Dimensions.get("window").width;

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const chartColor = current_price.usd > prices[0][1] ? "#16C784" : "#EA3943";

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <CointDetailedHeader />
        <View style={styles.coinPriceDetailsContainer}>
          <View>
            <Text style={{ color: "white", fontSize: 15 }}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.coinPricetext} />
          </View>
          <View style={styles.percentageChangeContainer}>
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={"white"}
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.percentageChangeContainerText}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View>
          <ChartPath
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot style={{ chartColor }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", fontSize: 15, alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", fontSize: 15, alignSelf: "center" }}>
              USD
            </Text>
            <TextInput
              style={styles.input}
              value={usdValue}
              keyboardType="numeric"
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailedScreen;

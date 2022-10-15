import React from "react";
import styles from "./styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import { StyleSheet, Text, View, Image } from "react-native";

const CointDetailedHeader = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-outline" size={30} color="white" />
      <View style={styles.symbolContainer}>
        <Image source={{ uri: small }} style={{ width: 25, height: 25 }} />
        <Text style={styles.symbolTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <FontAwesome5 name="user-circle" size={24} color="white" />
    </View>
  );
};

export default CointDetailedHeader;

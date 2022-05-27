import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

export const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alight: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

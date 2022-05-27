import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

export const HomeHeader = ({ onSearch }) => {
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
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Antonio 👋
        </Text>
        <Text
          style={{
            fontSize: FONTS.large,
            fontFamily: FONTS.bold,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Lets find masterpiece Art!
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 3,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

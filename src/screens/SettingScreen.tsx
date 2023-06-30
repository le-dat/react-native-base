import { styled } from "nativewind"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

import FontWrapper from "../components/common/FontWrapper"

const StyledView = styled(View)
const StyledText = styled(Text)

const SettingScreen: React.FC = () => {
  return (
    <FontWrapper>
      <StyledView>
        <StyledText className="text">SettingScreen asfd</StyledText>
      </StyledView>
    </FontWrapper>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

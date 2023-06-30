import { styled } from "nativewind"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

import FontWrapper from "../components/common/FontWrapper"

const StyledView = styled(View)
const StyledText = styled(Text)

const ItemScreen: React.FC = () => {
  return (
    <FontWrapper>
      <StyledView>
        <StyledText className="text">ItemScreen</StyledText>
      </StyledView>
    </FontWrapper>
  )
}

export default ItemScreen

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

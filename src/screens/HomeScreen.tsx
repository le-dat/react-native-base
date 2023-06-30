import React from "react"

import { StyledText, StyledView } from "../../constants"
import FontWrapper from "../components/common/FontWrapper"
import { Link } from "@react-navigation/native"

const HomeScreen: React.FC = () => {
  return (
    <FontWrapper>
      <StyledView>
        <StyledText style={{ fontFamily: "bold" }} className="text-red-600 ">
          HomeScreen
        </StyledText>
        <Link to={{ screen: "item", params: { id: "jane" } }}>Go to Jane&apos;s profile</Link>
      </StyledView>
    </FontWrapper>
  )
}

export default HomeScreen

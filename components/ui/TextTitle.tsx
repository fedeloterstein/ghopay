import React from "react";
import { Text as CText } from "@chakra-ui/react";

export const TextTitle = ({ children, ...restProps }: any) => {
  return (
    <CText
      textAlign={"center"}
      fontSize={"24px"}
      fontWeight={700}
      bgClip="text"
      bgGradient={
        "linear-gradient(93deg, rgba(120, 40, 200, 0.27) 0.58%, #006FEE 99.87%)"
      }
      {...restProps}
    >
      {children}
    </CText>
  );
};

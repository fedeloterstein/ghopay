import { Text as CText } from "@chakra-ui/react";
import React from "react";

export const TextBody = ({ children, ...restProps }: any) => {
  return (
    <CText
      color={"black"}
      textAlign={"center"}
      fontSize={"14px"}
      fontWeight={400}
      {...restProps}
    >
      {children}
    </CText>
  );
};

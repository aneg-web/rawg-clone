"use client";

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../../theme";
import { ColorModeProvider } from "./color-mode";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark" enableSystem={false}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}

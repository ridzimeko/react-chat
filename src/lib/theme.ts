import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  strictTokens: true,
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;`,
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
});

export default createSystem(defaultConfig, config);

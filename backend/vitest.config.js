import {defineConfig, defaultExclude} from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: [...defaultExclude, "./scripts", "./services/index.js"]
    }
  }
});

import { defineConfig } from "cypress";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

dotenvExpand.expand(dotenv.config());

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    viewportHeight: 614,
    viewportWidth: 360,
    video: false,
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      config.baseUrl = process.env.CYPRESS_BASE_URL || "";

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

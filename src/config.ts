import { defaultConfig, type ProjectLinterConfig } from "./types/config.js";

let globConfig: ProjectLinterConfig = { ...defaultConfig };

export function defineConfig(
  config?: ProjectLinterConfig,
): ProjectLinterConfig {
  if (config) {
    globConfig = config;
  }
  return globConfig;
}

export function getConfig(): ProjectLinterConfig {
  return globConfig;
}

export function lint() {
  const { rules, extensions, ignore, fix, rootDir } = getConfig();

  // TODO: implement linting logic
  console.log("Linting with rules:", rules);
}

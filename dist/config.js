import { defaultConfig } from "./types/config.js";
let globConfig = { ...defaultConfig };
export function defineConfig(config) {
  if (config) {
    globConfig = config;
  }
  return globConfig;
}
export function getConfig() {
  return globConfig;
}
export function lint() {
  const { rules, extensions, ignore, fix, rootDir } = getConfig();
  // TODO: implement linting logic
  console.log("Linting with rules:", rules);
}
//# sourceMappingURL=config.js.map

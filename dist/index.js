import { defaultConfig } from "./types/config.js";
let globConfig = defaultConfig;
export function defineConfig(config) {
  if (config) {
    globConfig = config;
  }
  return globConfig;
}
export function lint() {
  const { rules, extensions, ignore, fix, rootDir } = globConfig;
}
//# sourceMappingURL=index.js.map

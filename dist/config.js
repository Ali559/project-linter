import { lint } from "./index.js";
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
export async function start() {
    lint();
}
//# sourceMappingURL=config.js.map
import { type ProjectLinterConfig } from "./types/config.js";
export declare function defineConfig(
  config?: ProjectLinterConfig,
): ProjectLinterConfig;
export declare function getConfig(): ProjectLinterConfig;
export declare function lint(): void;

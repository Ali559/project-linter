export type NamingRule =
  | "kebab-case"
  | "camelCase"
  | "PascalCase"
  | "snake_case";

export interface ProjectLinterConfig {
  rules: Record<string, NamingRule>;
  ignore?: string[];
  extensions?: string[];
  fix?: boolean;
  rootDir: string;
}

export const defaultConfig: ProjectLinterConfig = {
  rootDir: process.cwd(),
  rules: {},
  ignore: ["node_modules", "dist", "github"],
  extensions: [
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".scss",
    ".html",
    ".vue",
    ".svelte",
  ],
};

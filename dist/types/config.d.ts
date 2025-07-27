export type NamingRule = "kebab-case" | "camelCase" | "PascalCase" | "snake_case";
export interface ProjectLinterConfig {
    rules: Record<string, NamingRule>;
    ignore?: string[];
    extensions?: string[];
    fix?: boolean;
    rootDir: string;
}
export declare const defaultConfig: ProjectLinterConfig;

import { rulesMap } from "./rules/index.js";
import path from "path";
import { walkDir } from "./utils/walk.js";
import fs from "fs";
import { defaultConfig, type ProjectLinterConfig } from "./types/config.js";

let globConfig: ProjectLinterConfig = { ...defaultConfig };

function getConfig(): ProjectLinterConfig {
    return globConfig;
}
export function defineConfig(
    config?: ProjectLinterConfig,
): ProjectLinterConfig {
    if (config) {
        globConfig = config;
    }
    return globConfig;
}
export async function lint() {
    const {
        rules,
        ignore = ["node_modules", "dist", "github"],
        rootDir = process.cwd(),
        extensions = [
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
    } = getConfig();
    const violations: { path: string; name: string; rule: string }[] = [];

    for (const [relativePath, ruleName] of Object.entries(rules)) {
        const absPath = path.resolve(rootDir, relativePath);
        const ruleFn = rulesMap[ruleName];

        if (!ruleFn) {
            console.warn(`Unknown rule: ${ruleName}`);
            continue;
        }

        await walkDir(
            absPath,
            (fullPath, name, isDir) => {
                if (!isDir && extensions?.length) {
                    const ext = path.extname(name);
                    if (!extensions.includes(ext)) return;
                }

                if (!ruleFn(name)) {
                    violations.push({ path: fullPath, name, rule: ruleName, });
                }
            },
            ignore,
        );
    }

    if (violations.length === 0) {
        console.log("✅ All files and folders match the naming rules!");
        process.exit(0);
    } else {
        console.log("❌ Naming violations found:");
        fs.writeFileSync(
            "violations.json",
            JSON.stringify(violations, null, 2),
            "utf-8",
        );
        console.log(`Saved violations to violations.json`);

        process.exit(1);
    }
}

import { getConfig } from "./config.js";
import { rulesMap } from "./rules/index.js";
import path from "path";
import { walkDir } from "./utils/walk.js";
import fs from "fs";
export async function lint() {
    const { rules, ignore = [], rootDir = process.cwd(), extensions, } = getConfig();
    const violations = [];
    for (const [relativePath, ruleName] of Object.entries(rules)) {
        const absPath = path.resolve(rootDir, relativePath);
        const ruleFn = rulesMap[ruleName];
        if (!ruleFn) {
            console.warn(`Unknown rule: ${ruleName}`);
            continue;
        }
        await walkDir(absPath, (fullPath, name, isDir) => {
            if (!isDir && extensions?.length) {
                const ext = path.extname(name);
                if (!extensions.includes(ext))
                    return;
            }
            if (!ruleFn(name)) {
                violations.push({ path: fullPath, name, rule: ruleName });
            }
        }, ignore);
    }
    if (violations.length === 0) {
        console.log("✅ All files and folders match the naming rules!");
        process.exit(0);
    }
    else {
        console.log("❌ Naming violations found:");
        fs.writeFileSync("violations.json", JSON.stringify(violations, null, 2), "utf-8");
        console.log(`Saved violations to violations.json`);
        process.exit(1);
    }
}
//# sourceMappingURL=lint.js.map
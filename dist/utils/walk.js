import fs from "fs";
import path from "path";
export async function walkDir(dir, callback, ignore = []) {
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.promises.stat(fullPath);
        const shouldIgnore = ignore.some((pattern) => fullPath.includes(pattern));
        if (shouldIgnore)
            continue;
        callback(fullPath, file, stat.isDirectory());
        if (stat.isDirectory()) {
            await walkDir(fullPath, callback, ignore);
        }
    }
}
//# sourceMappingURL=walk.js.map
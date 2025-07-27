declare function isCamelCase(name: string): boolean;
declare function isKebabCase(name: string): boolean;
declare function isPascalCase(name: string): boolean;
declare function isSnakeCase(name: string): boolean;
export declare const rulesMap: {
    camelCase: typeof isCamelCase;
    "kebab-case": typeof isKebabCase;
    PascalCase: typeof isPascalCase;
    snake_case: typeof isSnakeCase;
};
export {};

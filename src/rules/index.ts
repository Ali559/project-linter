function isCamelCase(name: string): boolean {
  return /^[a-z][a-zA-Z0-9]*$/.test(name);
}

function isKebabCase(name: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(name);
}

function isPascalCase(name: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}

function isSnakeCase(name: string): boolean {
  return /^[a-z0-9]+(_[a-z0-9]+)*$/.test(name);
}

export const rulesMap = {
  camelCase: isCamelCase,
  "kebab-case": isKebabCase,
  PascalCase: isPascalCase,
  snake_case: isSnakeCase,
};

export function changeNameToCase(name: string, rule: 'camelCase' | 'kebab-case' | 'PascalCase' | 'snake_case'): string {
    switch (rule) {
        case 'camelCase':
            return name.charAt(0).toLowerCase() + name.slice(1);
        case 'kebab-case':
            return name.replace(/([A-Z])/g, '-$1').toLowerCase();
        case 'PascalCase':
            return name.charAt(0).toUpperCase() + name.slice(1);
        case 'snake_case':
            return name.replace(/([A-Z])/g, '_$1').toLowerCase();
        default:
            return name;
    }
}
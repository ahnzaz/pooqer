export function buildQuery(queries: Record<string, any>): string {
    return Object.entries(queries).reduce((acc: string, [key, value]: [string, any], idx: number): string => `${acc}${idx > 0 ? '&' : ''}${key}=${value}`, '?')
}
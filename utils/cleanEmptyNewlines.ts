export const cleanEmptyNewlines = (text: string): string => text.replaceAll(/\n{2,}/g, "\n");

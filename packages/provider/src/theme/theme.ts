import { colors, scaleIndexMap, type ThemeColor, type ColorScheme, DEFAULT_COLOR_SCALE, DEFAULT_VARIANT, ColorScaleKeys, ThemeColors, baseColors, BaseColors } from './color';
import { defaultLayout, LayoutTheme } from './layout';

export interface Theme {
    theme: ColorScheme;
    colors: ThemeColors;
    layout: LayoutTheme;
}
const DEFAULT_THEME_COLORS = (colorScheme: ColorScheme): ThemeColors =>
    ({ ...getThemeColors(colors, DEFAULT_VARIANT, scaleIndexMap[DEFAULT_COLOR_SCALE]), ...baseColors[colorScheme] });

export const darkTheme: Theme = {
    theme: 'dark',
    colors: DEFAULT_THEME_COLORS('dark'),
    layout: { ...defaultLayout }
}

export const lightTheme: Theme = {
    theme: 'light',
    colors: DEFAULT_THEME_COLORS('light'),
    layout: { ...defaultLayout }
}

function getThemeColors(base: Record<string, string>, variant: typeof DEFAULT_VARIANT, scale: ColorScaleKeys): ThemeColor {
    return variant.reduce((acc, color) => {
        const colorKey = `color-${color}-${scale}` as keyof typeof colors;
        acc[color] = colors[colorKey];
        return acc;
    }, { ...base } as ThemeColor);
}
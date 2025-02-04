import { colors, scaleIndexMap, type ThemeColor, type ColorScheme, DEFAULT_COLOR_SCALE, DEFAULT_VARIANT, ColorScaleList } from './color';
import { defaultLayout, LayoutTheme } from './layout';

export interface Theme {
    colorScheme: ColorScheme;
    colors: ThemeColor;
    layout: LayoutTheme;
}

export const darkTheme: Theme = {
    colorScheme: 'dark',
    colors: getThemeColors('dark', DEFAULT_VARIANT, scaleIndexMap[DEFAULT_COLOR_SCALE]),
    layout: { ...defaultLayout }
}

export const lightTheme: Theme = {
    colorScheme: 'light',
    colors: getThemeColors('light', DEFAULT_VARIANT, scaleIndexMap[DEFAULT_COLOR_SCALE]),
    layout: { ...defaultLayout }
}

function getThemeColors(colorScheme: ColorScheme, variant: typeof DEFAULT_VARIANT, scale: ColorScaleList): ThemeColor {
    return variant.reduce((acc, color) => {
        acc[color] = colors[colorScheme][`${colorScheme}-${color}-${scale}`];
        return acc;
    }, {} as ThemeColor);
}
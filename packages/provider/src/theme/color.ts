export type ColorScheme = 'light' | 'dark';

export type ThemeColors = ThemeColor & BaseColors;
export interface ThemeColor {
    primary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    [key: string]: string;
}

type BaseColorKeys =
    | 'background'
    | 'foreground'
    | 'divider'
    | 'overlay'
    | 'focus'
    | 'shadow'
    | 'content-1'
    | 'content-2'
    | 'content-3';

export type BaseColors = {
    [K in BaseColorKeys]: string
};

export const baseColors: {
    [K in ColorScheme]: BaseColors
} = {
    dark: {
        "background": "#121212",
        "foreground": "#E0E0E0",
        "divider": "#373737",
        "overlay": "#1F1F1F",
        "focus": "#BB86FC",
        "shadow": "#000000",
        "content-1": "#BB86FC",
        "content-2": "#03DAC6",
        "content-3": "#CF6679"
    },
    light: {
        "background": "#FFFFFF",
        "foreground": "#000000",
        "divider": "#E0E0E0",
        "overlay": "#F5F5F5",
        "focus": "#6200EE",
        "shadow": "#9E9E9E",
        "content-1": "#6200EE",
        "content-2": "#03DAC6",
        "content-3": "#B00020"
    }
};

export const DEFAULT_VARIANT = ['primary', 'success', 'info', 'warning', 'danger'] as const;
export type VARITANT = typeof DEFAULT_VARIANT[number];
export const DEFAULT_COLOR_SCALE = 5;

export type ColorScaleKeys = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export const scaleIndexMap: Record<number, ColorScaleKeys> = {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900",
};

export const colors= {
    "color-primary-100": "#D1E0FB",
    "color-primary-200": "#A5C0F7",
    "color-primary-300": "#7497E7",
    "color-primary-400": "#4F72CF",
    "color-primary-500": "#1F43B0",
    "color-primary-600": "#163397",
    "color-primary-700": "#0F257E",
    "color-primary-800": "#091966",
    "color-primary-900": "#051154",
    "color-success-100": "#C8F8CC",
    "color-success-200": "#95F2A6",
    "color-success-300": "#5CDA7F",
    "color-success-400": "#32B564",
    "color-success-500": "#058442",
    "color-success-600": "#037143",
    "color-success-700": "#025F41",
    "color-success-800": "#014C3C",
    "color-success-900": "#003F37",
    "color-info-100": "#D0E5FC",
    "color-info-200": "#A3C8FA",
    "color-info-300": "#73A5F1",
    "color-info-400": "#4E84E3",
    "color-info-500": "#1B57D1",
    "color-info-600": "#1343B3",
    "color-info-700": "#0D3196",
    "color-info-800": "#082279",
    "color-info-900": "#051764",
    "color-warning-100": "#FDEFCD",
    "color-warning-200": "#FBDC9B",
    "color-warning-300": "#F4C069",
    "color-warning-400": "#EAA443",
    "color-warning-500": "#DD7B0B",
    "color-warning-600": "#BE6008",
    "color-warning-700": "#9F4905",
    "color-warning-800": "#803403",
    "color-warning-900": "#6A2602",
    "color-danger-100": "#FDE1D2",
    "color-danger-200": "#FBBCA5",
    "color-danger-300": "#F48D77",
    "color-danger-400": "#EA6154",
    "color-danger-500": "#DD2121",
    "color-danger-600": "#BE1826",
    "color-danger-700": "#9F1029",
    "color-danger-800": "#800A29",
    "color-danger-900": "#6A0628"
}
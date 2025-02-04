export type ColorScheme = 'light' | 'dark';

export interface ThemeColor {
    primary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
}

export const DEFAULT_VARIANT = ['primary', 'success', 'info', 'warning', 'danger'] as const;
export type VARITANT = typeof DEFAULT_VARIANT[number];
export const DEFAULT_COLOR_SCALE = 5;

export type ColorScaleList = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export const scaleIndexMap: Record<number, ColorScaleList> = {
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

export const darkColors = {
    "dark-primary-100": "#D1E0FB",
    "dark-primary-200": "#A5C0F7",
    "dark-primary-300": "#7497E7",
    "dark-primary-400": "#4F72CF",
    "dark-primary-500": "#1F43B0",
    "dark-primary-600": "#163397",
    "dark-primary-700": "#0F257E",
    "dark-primary-800": "#091966",
    "dark-primary-900": "#051154",
    "dark-success-100": "#C8F8CC",
    "dark-success-200": "#95F2A6",
    "dark-success-300": "#5CDA7F",
    "dark-success-400": "#32B564",
    "dark-success-500": "#058442",
    "dark-success-600": "#037143",
    "dark-success-700": "#025F41",
    "dark-success-800": "#014C3C",
    "dark-success-900": "#003F37",
    "dark-info-100": "#D0E5FC",
    "dark-info-200": "#A3C8FA",
    "dark-info-300": "#73A5F1",
    "dark-info-400": "#4E84E3",
    "dark-info-500": "#1B57D1",
    "dark-info-600": "#1343B3",
    "dark-info-700": "#0D3196",
    "dark-info-800": "#082279",
    "dark-info-900": "#051764",
    "dark-warning-100": "#FDEFCD",
    "dark-warning-200": "#FBDC9B",
    "dark-warning-300": "#F4C069",
    "dark-warning-400": "#EAA443",
    "dark-warning-500": "#DD7B0B",
    "dark-warning-600": "#BE6008",
    "dark-warning-700": "#9F4905",
    "dark-warning-800": "#803403",
    "dark-warning-900": "#6A2602",
    "dark-danger-100": "#FDE1D2",
    "dark-danger-200": "#FBBCA5",
    "dark-danger-300": "#F48D77",
    "dark-danger-400": "#EA6154",
    "dark-danger-500": "#DD2121",
    "dark-danger-600": "#BE1826",
    "dark-danger-700": "#9F1029",
    "dark-danger-800": "#800A29",
    "dark-danger-900": "#6A0628"
}

export const lightColors = {
    "light-primary-100": "#D1E0FB",
    "light-primary-200": "#A5C0F7",
    "light-primary-300": "#7497E7",
    "light-primary-400": "#4F72CF",
    "light-primary-500": "#1F43B0",
    "light-primary-600": "#163397",
    "light-primary-700": "#0F257E",
    "light-primary-800": "#091966",
    "light-primary-900": "#051154",
    "light-success-100": "#C8F8CC",
    "light-success-200": "#95F2A6",
    "light-success-300": "#5CDA7F",
    "light-success-400": "#32B564",
    "light-success-500": "#058442",
    "light-success-600": "#037143",
    "light-success-700": "#025F41",
    "light-success-800": "#014C3C",
    "light-success-900": "#003F37",
    "light-info-100": "#D0E5FC",
    "light-info-200": "#A3C8FA",
    "light-info-300": "#73A5F1",
    "light-info-400": "#4E84E3",
    "light-info-500": "#1B57D1",
    "light-info-600": "#1343B3",
    "light-info-700": "#0D3196",
    "light-info-800": "#082279",
    "light-info-900": "#051764",
    "light-warning-100": "#FDEFCD",
    "light-warning-200": "#FBDC9B",
    "light-warning-300": "#F4C069",
    "light-warning-400": "#EAA443",
    "light-warning-500": "#DD7B0B",
    "light-warning-600": "#BE6008",
    "light-warning-700": "#9F4905",
    "light-warning-800": "#803403",
    "light-warning-900": "#6A2602",
    "light-danger-100": "#FDE1D2",
    "light-danger-200": "#FBBCA5",
    "light-danger-300": "#F48D77",
    "light-danger-400": "#EA6154",
    "light-danger-500": "#DD2121",
    "light-danger-600": "#BE1826",
    "light-danger-700": "#9F1029",
    "light-danger-800": "#800A29",
    "light-danger-900": "#6A0628"
}

export const colors = {
    dark: { ...darkColors },
    light: { ...lightColors }
}
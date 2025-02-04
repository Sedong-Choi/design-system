type BaseThemeUnit = {
    sm?: string;
    md?: string;
    lg?: string;
}

type FontThemeUnit = BaseThemeUnit & { tiny?: string };

export interface LayoutTheme {
    fontSize?: FontThemeUnit;
    lineHeight?: FontThemeUnit;
    radius?: BaseThemeUnit;
    borderWidth?: BaseThemeUnit;
    spacing?: BaseThemeUnit;
    padding?: BaseThemeUnit;
    margin?: BaseThemeUnit;
    dividerWeight?: string;
    opacity?: string | number;
    disabledOpacity?: string | number;
    boxShadow?: BaseThemeUnit;
}

export const defaultLayout: LayoutTheme = {
    fontSize: {
        tiny: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
    },
    lineHeight: {
        tiny: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "1.75rem",
    },
    radius: {
        sm: "8px",
        md: "12px",
        lg: "14px",
    },
    borderWidth: {
        sm: "1px",
        md: "2px",
        lg: "3px",
    },
    boxShadow: {
        sm:
            "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
        md:
            "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
        lg:
            "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
    },
    spacing:{
        sm: "8px",
        md: "16px",
        lg: "24px",
    },
    padding:{
        sm: "8px",
        md: "16px",
        lg: "24px",
    },
    margin:{
        sm: "8px",
        md: "16px",
        lg: "24px",
    },
    dividerWeight: "1px",
    opacity: ".8",
    disabledOpacity: ".5",
};
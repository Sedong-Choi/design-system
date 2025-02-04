// from mui breakpoint 
export const defaultBreakpoints: Breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
}

export interface Breakpoints {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    [custom: string]: number | undefined;
}
import { Meta } from '@storybook/react';
import { ThemeProvider, useTheme } from '@shared/provider';
import { ThemeColors } from '../src/theme';
import { PropsWithChildren } from 'react';

const Base = ({ children }: PropsWithChildren<any>) => {
    const { changeTheme, theme, colors, layout } = useTheme();

    return <div style={{
        backgroundColor: colors.background,
        color: colors.foreground,
        padding: layout?.padding?.md || '1rem'
    }}>

        <button onClick={changeTheme}>Change Theme</button>
        <h1>Theme: {theme.toUpperCase()}</h1>

        {children}
    </div>
}
export default {
    title: 'Theme/ThemeProvider',
    decorators: [(Story) => <ThemeProvider><Story /></ThemeProvider>],
} as Meta<object>

export const Default = {
    render: () => <Base />,
    name: 'Default',
}

const getColors = (colors: ThemeColors) => {
    return Object.entries(colors).reduce((acc, [key, value]) => {
        let colorKey = key.split('-')[1] || key;

        if (key.includes('content')) {
            colorKey = 'content';
        }
        if (colorKey && acc[colorKey] === undefined) {
            acc[colorKey] = [];
        }

        acc[colorKey]?.push({ name: key, value: value });
        return acc;
    }, {});
}

const ColorContainer = ({ title, categoryColors }) => {
    const { colors, theme } = useTheme();

    return <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
            {
                categoryColors.map(({ name, value }) =>
                    <div key={`${name} + ${value}`} style={{
                        backgroundColor: value,
                        padding: '1rem',
                        color:
                            name === 'foreground' ?
                                theme === 'light'
                                    ? 'white'
                                    : 'black'
                                : colors?.foreground,
                        textShadow: '1px 1px 1px rgba(0,0,0,0.5)'
                    }}>{value}</div>)
            }
        </div>
    </div>
};

const ThemeColor = () => {
    const { colors, layout } = useTheme();
    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        padding: (layout?.padding?.md || '1rem')
    }}>
        {
            Object.entries(getColors(colors)).map(([key, values]) =>
                <ColorContainer key={key} categoryColors={values} title={key} />)
        }
    </div>
}

export const Colors = {
    render:()=> <ThemeColor/>,
    name: 'Colors',
}

const RadiusLayout = () => {
    const { colors, layout } = useTheme();
    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        padding: (layout?.padding?.md || '1rem')
    }}>
        {
            Object.entries(layout?.radius || {}).map(([key, value]) =>
                <div key={key} style={{
                    backgroundColor: colors.info,
                    padding: '1rem',
                    borderRadius: value,
                    textAlign: 'center'
                }}>{key}: {value}</div>)
        }
    </div>
}
export const Radius = {
    render:()=> <RadiusLayout/>,
    name: 'Radius',
}

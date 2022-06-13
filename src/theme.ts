import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Mabry Pro',
            'Mabry Pro'
        ].join(',')
    },
    palette: {
        text: {
            primary: "#000347",
            secondary: "#E5FFD5",
            //disabled: styles.ttt,
            //hint: styles.tttt,
        },
        background: {
            default: "#E5E5E5"
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1250,
            desktop: 1700,
        }
    }
});

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

theme.typography.h1.fontSize = "48px"

export { theme };

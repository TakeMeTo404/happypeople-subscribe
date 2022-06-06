import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
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
    }
});

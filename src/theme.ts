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
            secondary: "#E5FFD5"
        },
        background: {
            default: "#E5E5E5"
        }
    }
});

export default theme;

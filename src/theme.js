import {createMuiTheme} from '@material-ui/core/styles';
import {blue, lime, lightGreen} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            elight: blue[100],
            light: blue[200],
            main: blue[500],
            dark: blue[800],
        },
        secondary: {
            main: lime['A400'],
            dark: lightGreen['A700'],
        },
    },
    typography: {
        fontFamily: "Roboto",
    }
});

export default theme;
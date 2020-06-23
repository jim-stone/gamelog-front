import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: grey[100],
        },
    },


});


export const styles = {
    centeredContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};


export default theme;
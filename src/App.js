import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout'

const theme = createTheme({
    palette: {
        primary: {
            main: '#132232' //white-ish
        },
        secondary: {
            main: '#203647' //light blue
        },
        info: {
            main: '#007CC7' //blue
        },
        error: {
            main: '#EEFBFB'
        },
        text: {
            primary: '#EEFBFB',
            secondary: '#4DA8DA'
        }
    },

    typography: {
        fontFamily: 'Titillium Web',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,

        h2:{
            fontWeight: 700
        },
        h3:{
            fontWeight: 600
        },
        h4:{
            fontWeight: 550
        },
        h5:{
            fontWeight: 500
        },
        h6:{
            fontWeight: 400
        },
        subtitle1:{
            fontWeight: 400
        },
    }
  });

function App(){
    return(
        <Router>
            <MuiThemeProvider theme={theme}>
            <Layout>
                <Switch>
                <Route exact path='/'>
                    <Create />
                </Route>
                <Route path='/create'>
                    <Create />
                </Route>
                
                </Switch>
            </Layout>
            </MuiThemeProvider>
        </Router>
    );
}

export default App;
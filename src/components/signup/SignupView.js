import React from 'react';
import Footer from '../home/Footer';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider} from '@material-ui/core';
import theme from '../../theme';
import {User} from "../../agent";
import {signup} from "../../actions";
import {connect} from "react-redux";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper:{
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

});

class SignUpView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username:'',password:''};
        this.handleInputChange = field=> e => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: e.target.value});
            this.setState(newState);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Footer/>
                <main className={this.props.classes.main}>
                    <Paper className={this.props.classes.paper}>
                        <AccountCircle/>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form onSubmit={event => {
                            event.preventDefault();
                            this.props.checkAccount(this.state.username, this.state.password);
                        }}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">UserName</InputLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange('username')}
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handleInputChange('password')}
                                    type="password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign up
                            </Button>
                        </form>
                    </Paper>
                </main>
            </MuiThemeProvider>

        );
    }
}

function mapStateToProps(state) {
    return {
        redirectTo: state.Redirect.redirectTo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkAccount: (email, password) => {
            //dispatch(login(User.login(email, password)));
            User.signup(email, password).then(res=>dispatch(signup(res))).catch(()=>alert("username has been used"));
        },
        onRedirect: () => dispatch({type: 'REDIRECTED'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignUpView));
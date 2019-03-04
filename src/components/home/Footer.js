import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';
import {connect} from "react-redux";


const styles = theme => ({
    root: {
        flexGrow: theme.spacing.unit * 2,
        marginLeft: -theme.spacing.unit,
        marginRight: -theme.spacing.unit,
    },
    grow: {
        flexGrow: theme.spacing.unit * 2,
    },
    button: {
        marginRight: theme.spacing.unit * 5,
    },
    hidden : {
        display: 'none',
    },
    buttonIcon: {
        marginRight: theme.spacing.unit * 0.5,
    },
});

function Footer(props) {
    const { classes,userId } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        客天涯
                    </Typography>
                    <Button color="inherit" className={classes.button} href="#">
                        <Home className={classes.buttonIcon}/>
                        Home
                    </Button>
                    {userId!==""?
                        <Button color="inherit" className={classes.button} href="#/write-article">
                            <Book className={classes.buttonIcon}/>
                            写文章
                        </Button>
                        :
                        <Button color="inherit" className={classes.button} href="#/login">
                            <AccountCircle className={classes.buttonIcon}/>
                            登录
                        </Button>
                    }
                    <Button color="inherit" className={classes.button} href="#/signup">
                        <AccountCircle className={classes.buttonIcon}/>
                        注册
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

/*Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

function mapStateToProps(state) {
    return {userId:state.Login.userId};
}

export default connect(mapStateToProps)(withStyles(styles)(Footer));
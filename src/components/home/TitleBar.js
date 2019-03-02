import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        marginLeft: -theme.spacing.unit,
        marginRight: -theme.spacing.unit,
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        color: '#FFFFFF',
        paddingTop: theme.spacing.unit * 12,
        paddingBottom: theme.spacing.unit * 8,
        fontWeight: 600,
    },
    description: {
        paddingTop: theme.spacing.unit * 3,
        color: theme.palette.primary.dark,
    }
});

function TitleBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h2" align="center">
                客天涯
                <Typography className={classes.description} variant="body2" align="center">
                    A place to share your adventure.
                </Typography>
            </Typography>

        </div>
    );
}
TitleBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);
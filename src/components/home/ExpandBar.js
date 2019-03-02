import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Face from '@material-ui/icons/Face';
import {connect} from "react-redux";
import {setTag} from '../../actions';

const styles = theme => ({
    root: {
        marginLeft: -theme.spacing.unit,
        marginRight: -theme.spacing.unit,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    chooseTag: {
        backgroundColor: theme.palette.primary.dark,
        margin: theme.spacing.unit,

    },
    expandPanel: {
        backgroundColor: theme.palette.primary.elight,
    },
    text: {
        fontSize: '18px',
        fontWeight: '500',
        color: 'purple',
    }
});

function ExpandBar(props) {
    const {classes, tags, Tag, onClick} = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.expandPanel}>
                <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                    <Typography className={classes.text}>Choose a tag</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {tags.map(tag=>(
                        <Button size="small" variant="outlined" arial-label="tag" className={Tag===tag.name?classes.chooseTag:classes.margin}
                            onClick={()=>onClick(tag.name)} key={tag.name}
                        >
                            <Face/>
                            {tag.name}
                        </Button>
                    ))}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

ExpandBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {Tag} = state;
    return {Tag};
}

function mapDispatchToProps(dispatch) {
    return {onClick: (tag)=> dispatch(setTag(tag))};
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ExpandBar));
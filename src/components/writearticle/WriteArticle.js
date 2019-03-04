import React from 'react';
import Footer from '../home/Footer';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {MuiThemeProvider} from '@material-ui/core';
import theme from '../../theme';
import {connect} from "react-redux";
import {Article} from "../../agent";
import IconButton from "@material-ui/core/IconButton";
import Photo from "@material-ui/icons/Photo";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
            width: 800,
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
    submitButton:{
        float:'right',
    },
    iconButton:{
        float:'left'
    },
    input:{
      display:'none'
    },
});

class WriteArticle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title:'',content:'',image:''};
        this.handleInputChange = field=> e => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: e.target.value});
            this.setState(newState);
        };
        this.handleImageChange = e => {
            this.setState({'image':e.target.files[0]});
        }
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
                        <form onSubmit={e=>{e.preventDefault();this.props.post(this.state.title,this.state.content,this.state.image,this.props.authToken)}}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="title">Title</InputLabel>
                                <Input
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange('title')}
                                    autoFocus
                                />
                            </FormControl>
                            <TextField margin="normal" fullWidth multiline
                                       label="summary"  rows={5} variant='outlined'
                                       id="summary" placeholder="你尽管写，反正我不存下来..."
                            />
                            <TextField margin="normal" required fullWidth multiline
                                       label="content" rows={20} variant='outlined'
                                       id="content" placeholder="write your article here..."
                                       value={this.state.content}
                                       onChange={this.handleInputChange('content')}
                            />
                            <input accept=".jpg,.jpeg,.png " className={this.props.classes.input} id="icon-button-file" type="file"
                            ref={ref=>this.image = ref} onChange={this.handleImageChange} />
                            <IconButton color="primary" className={this.props.classes.iconButton} component="span" onClick={()=>this.image.click()}>
                                <Photo />
                            </IconButton>
                            <Button type="submit" variant="contained" size="medium" color="primary" className={this.props.classes.submitButton}>
                                发布
                            </Button>
                        </form>
                    </Paper>
                </main>
            </MuiThemeProvider>
        )
    }
}
function mapStateToProps(state) {
    return {
        redirectTo: state.Redirect.redirectTo,
        authToken: state.Login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        post: (title, content,image,auth) => {
            Article.postAnArticle(title,content,image,auth).then(res=>dispatch({type:'POST'})).catch(()=>alert("post article failed"));
        },
        onRedirect: () => dispatch({type: 'REDIRECTED'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(WriteArticle));
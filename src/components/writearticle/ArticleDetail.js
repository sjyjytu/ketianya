import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import theme from '../../theme';
import Footer from "../home/Footer";

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
    title: {
        marginBottom: theme.spacing.unit * 4,
    },
    content: {
        marginBottom: theme.spacing.unit * 2,
    },
    image: {
        width:'70%',
        marginBottom: theme.spacing.unit * 2,
    },
    author: {
        marginBottom: theme.spacing.unit * 2,
    }
});


function mapStateToProps(state) {
    return {articles:state.Articles.articles};
}



class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const id = this.props.match.params.id;
        const [article] = this.props.articles.filter(art => art._id === id);
        console.log(article);
        return (
            <MuiThemeProvider theme={theme}>
                <Footer/>
                <main className={this.props.classes.main}>
                    <Paper className={this.props.classes.paper} evaluation={3}>
                        <Typography variant="h3" className={this.props.classes.title} color="primary">
                            {article.title}
                        </Typography>
                        <Typography variant="h6" className={this.props.classes.author} color="secondary">
                            {'作者id：' + article.creator}
                        </Typography>
                        <img src={article.imagePath} alt={article.title} className={this.props.classes.image}/>
                        <Typography variant="body1" className={this.props.classes.content} color="inherit">
                            {article.content}
                        </Typography>
                    </Paper>
                </main>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ArticleDetail));
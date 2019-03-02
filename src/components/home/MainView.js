import React from 'react';
import Footer from './Footer';
import TitleBar from './TitleBar';
import ExpandBar from './ExpandBar';
import Content from './Content';
import { withStyles } from '@material-ui/core/styles';
import {Article} from "../../agent";
import {connect } from "react-redux";
import {storeArticles} from "../../actions";

const styles = theme => ({

});

class MainView extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Article.getArticles().then(res=>this.props.storeAllArticles(res.posts)).catch(()=> alert('storeArticles failed'))
    }
    render() {
        const tags = [
            {name:'上海'},
            {name:'江苏'},
            {name:'迪士尼'},
            {name:'所有'},
        ];
        return (
            <React.Fragment>
                <Footer/>
                <TitleBar/>
                <ExpandBar tags={/*this.props.Articles.*/tags}/>
                <Content/>
            </React.Fragment>
        );
    }
}

/*function MainView(props) {
    const tags = [
        {name:'上海'},
        {name:'江苏'},
        {name:'迪士尼'},
        {name:'所有'},
    ];
    const articles = [
        {
            author:'JY',
            title: '上海之旅',
            time: '2019-2-27',
            tag: '上海',
            summary: '上海很繁华的',
            link: '#'

        },
        {
            author:'Gusabary',
            title: '迪士尼之旅',
            time: '2019-1-18',
            tag: '迪士尼',
            summary: '迪士尼超梦幻的耶',
            link: '#'
        },
        {
            author:'KTY',
            title: '南大之行',
            time: '2019-4-13',
            tag: '江苏',
            summary: '南大妹子好多~',
            link: '#'
        }
    ];
    return (
        <React.Fragment>
            <Footer/>
            <TitleBar/>
            <ExpandBar tags={tags}/>
            <Content articles={articles}/>
        </React.Fragment>
    );
}*/

function mapStateToProps(state) {
    return {Articles: state.Articles};
}

function mapDispatchToProps(dispatch) {
    return {
        storeAllArticles: articles=>{dispatch(storeArticles(articles))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MainView));
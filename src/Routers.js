import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import MainView from './components/home/MainView';
import LoginView from './components/login/LoginView';
import SignUpView from './components/signup/SignupView';
import WriteArticle from './components/writearticle/WriteArticle';
import ArticleDetail from './components/writearticle/ArticleDetail';

const BasicRoute = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainView}/>
                <Route exact path="/login" component={LoginView}/>
                <Route exact path="/signup" component={SignUpView}/>
                <Route exact path="/write-article" component={WriteArticle}/>
                <Route exact path="/article/:id" component={ArticleDetail} />
            </Switch>
        </HashRouter>
    );
};

export default BasicRoute;
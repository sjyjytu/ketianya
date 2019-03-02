var superagent = require('superagent');

const RootUrl = 'http://meandemo-env.2ammmpcvep.ap-southeast-1.elasticbeanstalk.com';

function resBody(res) {
    return res.body;
}

const request = {
    get: url=>superagent.get(RootUrl+url).then(resBody),
    post:(url,body)=>superagent.post(RootUrl+url).send(body).then(resBody)
};

//get article, post article, and delete article
export const Article = {
        getArticles: ()=>request.get('/api/posts'),
        postAnArticle: (title, content, image, auth) => superagent.post(RootUrl + '/api/posts').set('Authorization', 'Bearer ' + auth).attach('image', image, title)
            .field('title', title).field('content', content).then(resBody),
        deleteArticle: (id, auth) => superagent.del(RootUrl + '/api/posts/' + id).set('Authorization','Bearer '+auth).then(resBody)
    };

//
export const User = {
    login: (email, password) => request.post('/api/user/login',{"email":email, "password": password}),
    signup: (email, password) => request.post('/api/user/signup',{"email":email, "password": password})
};
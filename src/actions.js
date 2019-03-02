export const SET_TAG = 'SET_TAG';
export const LOGIN = 'LOGIN';
export const TAGS = {
    ALL: '所有',
    SHANG_HAI: '上海',
    JIANG_SU: '江苏',
    DISNEY: '迪士尼'
};

export function setTag(tag) {
    return {
        type:SET_TAG, tag
    };
}

export function login(result) {
    return {
        type: LOGIN,
        result: result,
    }
}

export function signup(result) {
    return {
        type: 'SIGNUP',
        result: result,
    }
}

const createTags = articles => (articles.map(article => ({name: article.title})));

export function storeArticles(articles) {
    return {
        type: 'STORE_A',
        articles: articles,
        tags: createTags(articles),
    }
}

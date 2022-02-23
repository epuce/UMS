import PageLogin from '../pages/Login'
import PageIndex from '../pages/Index'
import PageLangVars from '../pages/LangVars'

export default [
    {
        path: '/login',
        component: PageLogin,
    },
    {
        path: '/',
        component: PageIndex,
    },
    {
        path: '/lang-vars',
        component: PageLangVars
    },
    
    {
        id: 'page-index',
        path: '*',
        component: PageIndex,
    }
]
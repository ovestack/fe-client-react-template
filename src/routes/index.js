import App from '../App'
import Test from '../pages/test'
import TestInner from '../pages/test/inner'

export default [{
    path: '/',
    component: App
}, {
    path: '/test',
    component: Test,
    childRoutes: [{
        path: 'inner',
        component: TestInner
    }]
}]
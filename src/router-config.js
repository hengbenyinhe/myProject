import vueCanvas from './views/vueCanvas/index.vue';
import test from './views/test/index.vue';

export default [
    {
        path: '/',
        component: resolve => require(['./views/layout/layout.vue'], resolve),
        children: [
            {
                path: '',
                redirect: '/views/vueCanvas'
            },
            {
                path: '/views/vueCanvas',
                component: vueCanvas
            },
            {
                path: '/views/test',
                component: test
            },
        ]
    }
]

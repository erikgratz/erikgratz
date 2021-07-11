require('./bootstrap');

// Import modules...
import {createApp, h} from 'vue';
import {App as InertiaApp, plugin as InertiaPlugin} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import MyHeader from './Layouts/MyHeader';
const el = document.getElementById('app');

import { toast, snackbar } from 'tailwind-toast';

Echo.channel('contacts').listen('ContactReqCreated', (e) => {
    // console.log(e)
    toast()
        .success(e.name, " just made contact!")
        .from('bottom','center')
        .as('pill')
        .for(5000).show()
})


createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`)
                .then(({default: page}) => {
                    if (page.layout === undefined) {
                        if (page.components && !Object.keys(page.components)
                            .includes('BreezeAuthenticatedLayout')){
                            page.layout = MyHeader
                        }
                    }
                    return page
                }),
        }),
})
    .mixin({methods: {route}})
    .use(InertiaPlugin)
    .mount(el);

InertiaProgress.init({color: '#05FaB7'});

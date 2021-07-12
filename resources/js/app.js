require('./bootstrap');

// Import modules...
import {createApp, h} from 'vue';
import {App as InertiaApp, plugin as InertiaPlugin} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import Headers from './Layouts/Headers';
import Toaster from '@meforma/vue-toaster';

const el = document.getElementById('app');




let app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`)
                .then(({default: page}) => {
                    if (page.layout === undefined) {
                        if (page.components && !Object.keys(page.components)
                            .includes('BreezeAuthenticatedLayout')){
                            page.layout = Headers
                        }
                    }
                    return page
                }),
        }),
})
    .mixin({methods: {route}})
    .use(InertiaPlugin)
    .use(Toaster)
    .mount(el);


InertiaProgress.init({color: '#05FaB7'});

Echo.channel('contacts').listen('ContactReqCreated', (e) => {
    app.$toast.success(e.name + " just made contact!", {
        onClick: function () {
            app.$inertia.get('/contact')
        },
    })
})

window.Echo.connector.pusher.connection.bind('connected', (payload) => {
    app.$toast.success("Websocket Connected!")
})

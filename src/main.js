import { createApp } from 'vue';
import App from './App.vue';
// Router
import router from './router';
// Material design icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { aliases, md } from 'vuetify/iconsets/md';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
            md,
        },
    },
});

createApp(App).use(vuetify).use(router).mount('#app');

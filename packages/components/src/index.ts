import type { App } from 'vue';

import QButton from './QButton/QButton.vue';

export default {
    install(app: App) {
        app.component('QButton', QButton);
    },
};

export { QButton };

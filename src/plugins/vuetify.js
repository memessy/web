import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ru from 'vuetify/es5/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { ru },
      current: 'ru',
    },
    theme: {
        dark:false,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                // primary: "#f2f2f2",
                main_background: "#f2f2f2",
                primary: "#2D3142",
                secondary: "#424242",
                accent: "#EC6A32",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            },
        },
    },
});

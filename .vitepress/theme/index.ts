import Layout from './Layout.vue'
import { setupRedirects } from './redirects'
import './custom.css';
import ImagePopup from './components/ImagePopup.vue';

export default {
    Layout,

    enhanceApp({ app, router }) {
        setupRedirects(router);
        app.component("ImagePopup", ImagePopup);
    }
}

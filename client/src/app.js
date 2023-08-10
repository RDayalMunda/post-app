import router from "./router/index.js";
import CustomHeader from "./components/common/header/header.js"
import createStores from "./store.js";

import SignUpModal from "./components/common/sign-up-modal/sign-up-modal.js"
import SignInModal from "./components/common/sign-in-modal/sign-in-modal.js"


const App = Vue.createApp({
    components: { CustomHeader, SignUpModal, SignInModal },
    template: /*html*/`
    <div class="container-fluid">
        <div class="row">
            <custom-header></custom-header>
            <div class="col-sm p-3 min-vh-100">
                <router-view></router-view>
            </div>
        </div>
    </div>

    <sign-up-modal></sign-up-modal>
    <sign-in-modal></sign-in-modal>


    `
})


App.use(router)
createStores(App)
App.mount("#vue-app")


// enable tooltips
let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
tooltipelements.forEach((el) => {
    new bootstrap.Tooltip(el);
});
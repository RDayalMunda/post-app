import { toggleSignUpModal, toggleSignInModal } from "../../../common/util.js";
import template from "./header.template.js"

const { inject, onMounted } = Vue;
const { useRoute, useRouter } = VueRouter;
export default {
    template,
    setup(){
        let route = useRoute();
        let router = useRouter();

        let userStore = inject('userStore')
        function goTo(name){
            router.push({name})
        }

        onMounted( ()=>{
        } )

        return {
            userStore,
            route,
            router,

            goTo,
            toggleSignUpModal,
            toggleSignInModal,
        }
    }
}
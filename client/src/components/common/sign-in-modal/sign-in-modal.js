import template from "./sign-in-modal.template.js";
import { api } from "../../../common/api.js";
const { ref, onMounted, inject } = Vue;
const { useRouter } = VueRouter;  
export default {
    name: "sign-up-modal",
    setup(){
        function userReset(){ return { email: "", password: "" } }
        let userData = ref( userReset() )
        let userStore = inject("userStore")
        let modal = null
        let router = useRouter();

        function closeModal(){
            userData.value = userReset()
            modal.hide()
        }

        async function signIn(){
            try{
                let { data } = await api.post('/user/sign-in', userData.value)
                if (data.success){
                    modal.hide()
                    router.push({name: "Posts"})
                    userStore.userId = data.userData.userId
                    userStore.userName = data.userData.userName
                    userStore.isLoggedIn = true

                }else{
                    userStore.userId = null
                    userStore.userName = ""
                    userStore.isLoggedIn = true
                    alert(data.message)
                }
                localStorage.setItem('userStore', JSON.stringify( userStore ))
            }catch(err){
                console.log(err)
            }
        }

        onMounted( ()=>{
            modal = new bootstrap.Modal("#sign-in-modal")
        } )


        return {
            userData,
            closeModal,
            signIn,
        }
    },
    template,
}
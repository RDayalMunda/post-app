import template from "./sign-up-modal.template.js";
import { api } from "../../../common/api.js";
const { ref, onMounted } = Vue;
const { useRouter } = VueRouter;  
export default {
    name: "sign-up-modal",
    setup(){
        function userReset(){ return { firstName: "", middleName: "", lastName: "", gender: "M", dob: "", email: "", phone: "", password: "" } }
        let userData = ref( userReset() )
        let modal = null
        let router = useRouter();

        function closeModal(){
            userData.value = userReset()
            modal.hide()
        }

        async function createNewuser(){
            try{
                let { data } = await api.post('/user', userData.value)
                if (data.success){
                    modal.hide()
                }
                alert(data.message)
            }catch(err){
                console.log(err)
            }
        }

        onMounted( ()=>{
            modal = new bootstrap.Modal("#sign-up-modal")
        } )


        return {
            userData,
            closeModal,
            createNewuser,
        }
    },
    template,
}
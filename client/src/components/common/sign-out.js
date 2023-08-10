const { onMounted, inject } = Vue;
const { useRouter } = VueRouter;

export default {
    name: "sign-out",
    setup(){
        let userStore = inject('userStore')
        let router = useRouter()
        onMounted( ()=>{
            setTimeout( ()=>{
                userStore.userId = null;
                userStore.userName = "";
                userStore.isLoggedIn = false;
                localStorage.setItem( 'userStore', JSON.stringify( userStore ) )
                router.push({name: "Home"})
            }, 2000 )
        } )
    },
    template: /*html*/`
    <h1>...Loggin Out</h1>
    `
}
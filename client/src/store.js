const { reactive } = Vue;

let savedUserStore = localStorage.getItem('userStore')
if(savedUserStore) savedUserStore = JSON.parse(savedUserStore)
const userStore = reactive({
    isLoggedIn: false,
    userId: null,
    userName: "",
    ...savedUserStore,
})

let savedSettings = localStorage.getItem('settingsStore')
if (savedSettings) savedSettings = JSON.parse(savedSettings)
const settingsStore = reactive({
    theme: "light",
    ...savedSettings,
})


// VI is the vue instance
const createStores = (VI)=>{
    VI.provide("userStore", userStore)
    VI.provide("settingsStore", settingsStore)
}

export default createStores
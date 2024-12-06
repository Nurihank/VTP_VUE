import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore",{
    state: ()=>({
        userInfo:[], /* gelen userları tutacak */
    }),
    getters:{
        filtre(){  /*  istediğimize göre veri getirir */}
    },
    actions:{
        Login(userName,password){
            /* BURDA LOGİN İŞLEMLERİ YAPILACAK */
        }
    }
})